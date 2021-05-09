const fs = require('fs');
const times = require('./times');

const saveDirectory = './db/seeds/utils/mapped-image-data.js';
const source = './db/seeds/image-map-folder';
const folderExtension = source + '/';

const imageFileDirectoryMapper = new Promise( resolve => {

  const getFolders = new Promise( (resolve, reject) => {
    fs.readdir('./db/seeds/image-map-folder', (err, folder) => {
      if (err) {
        reject(err);
      }
      resolve(folder);
    });
  });

  return getFolders.then(folders => {
    return folders.map(folder => {
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
    });
  })
    .then(data => {
      resolve(data);
    });
});

imageFileDirectoryMapper.then( data => {
  Promise.all(data).then( arrayOfArrays => {
    console.log(arrayOfArrays);

    fs.writeFileSync(saveDirectory, '');
    fs.writeFileSync(saveDirectory, 'module.exports = [', { flag: 'a+' });

    times(arrayOfArrays.length)( ind => {
      const { arrayOfImages, folder, extension } = arrayOfArrays[ind];
      fs.writeFileSync(saveDirectory, '[', { flag: 'a+' });
      arrayOfImages.forEach((img, i) => {
        if (i === arrayOfImages.length - 1) {
          fs.writeFileSync(saveDirectory, `'${extension}${folder}/${img}'`, { flag: 'a+' } );
        } else {
          fs.writeFileSync(saveDirectory, `'${extension}${folder}/${img}',`, { flag: 'a+' } );
        }

      });
      if (ind === arrayOfArrays.length - 1) {
        fs.writeFileSync(saveDirectory, ']', { flag: 'a+' });
      } else {
        fs.writeFileSync(saveDirectory, '],', { flag: 'a+' });
      }

    });
  })
    .then(() => {
      fs.writeFileSync(saveDirectory, '];', { flag: 'a+' });
    });
});