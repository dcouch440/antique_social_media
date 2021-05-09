const fs = require('fs');
const times = require('./times');

const saveDirectory = './db/seeds/utils/mapped-image-data.js';
const source = './db/seeds/image-map-folder';
const folderExtension = source + '/';

const imageFileDirectoryMapper = new Promise(resolve => {

  return new Promise((resolve, reject) => {
    fs.readdir('./db/seeds/image-map-folder', (err, folder) => {
      if (err) {
        reject(err);
      }
      resolve(folder);
    });
  })
    .then(folders => {
      resolve(folders.map(folder => {
        return new Promise((resolve, reject) => {
          fs.readdir( folderExtension + folder, (err, extractedFile) => {
            if (err) {
              return reject(err);
            }
            resolve({
              arrayOfImages: extractedFile,
              folder: folder,
              extension: folderExtension
            });
          });
        });
      }));
    })
    .catch(err => console.error(err));
});

imageFileDirectoryMapper.then(data => {
  const generate = (val, flag = { flag: 'a+' }) => fs.writeFileSync(saveDirectory, val, flag);

  Promise.all(data).then(arrayOfArrays => {
    // clear file
    generate('', null);
    // export
    generate('module.exports = [');

    times(arrayOfArrays.length)(ind => {
      const { arrayOfImages, folder, extension } = arrayOfArrays[ind];
      generate('[');
      arrayOfImages.forEach((img, i) => {
        if (i === arrayOfImages.length - 1) {
          generate(`'${extension}${folder}/${img}'`);
        } else {
          generate(`'${extension}${folder}/${img}',`);
        }
      });
      if (ind === arrayOfArrays.length - 1) {
        generate(']');
      } else {
        generate('],');
      }
    });
  })
    .then(() => {
      generate('];');
    })
    .catch(err => console.error(err));
});