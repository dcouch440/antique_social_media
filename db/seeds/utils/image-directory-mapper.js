const fs = require('fs');

const saveDirectory = './db/seeds/utils/mapped-image-data.js';
const source = './db/seeds/image-map-folder';
const folderExtension = source + '/';

const imageFileDirectoryMapper = async getDirectoryData => {

  const getFolders = getFiles => {
    fs.readdir('./db/seeds/image-map-folder', (err, folder) => {
      if (err) {
        return getFiles(err);
      }
      getFiles(null,folder);
    });
  };

  getFolders( (err, folders) => {

    folders.forEach(folder => {
      const extractFiles = extractor => {
        fs.readdir( folderExtension + folder, (err,file) => {
          if (err) {
            return extractor(err);
          }
          extractor(null,file);
        });
      };

      extractFiles( (err, extractedFile) => {
        getDirectoryData({
          arrayOfArrayImages: extractedFile,
          folder: folder,
          extension: folderExtension
        });
      });
    });

  });
};

try {
  fs.writeFileSync(saveDirectory, '');
  fs.writeFileSync(saveDirectory, 'module.exports = [', { flag: 'a+' });

  imageFileDirectoryMapper( data => {
    const { arrayOfArrayImages, folder, extension } = data;
    fs.writeFileSync(saveDirectory, '[', { flag: 'a+' });

    arrayOfArrayImages.forEach( async (img, i, array) => {
      if (i === array.length - 1) {
        fs.writeFileSync(saveDirectory, `'${extension}${folder}/${img}'`, { flag: 'a+' } );
      } else {
        fs.writeFileSync(saveDirectory, `'${extension}${folder}/${img}',`, { flag: 'a+' } );
      }
    });

    fs.writeFileSync(saveDirectory, '],', { flag: 'a+' });
  });
} catch (err) {
  console.error(err);
}

setTimeout(() => {
  // something about the writeFileSync causes this to fire first.
  // this is a simple fix to something thats purely made to build a static file.
  fs.writeFileSync(saveDirectory, '];', { flag: 'a+' });
}, 2000 );

