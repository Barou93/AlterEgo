const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('Selectionner une image SVP!', false);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },

  filename: (req, file, cb) => {
    let fileExtension = file.originalname
      .split('.')
      [file.originalname.split('.').length - 1].toLocaleLowerCase();
    let extension = MIME_TYPES[file.mimetype];
    file.extension = fileExtension.replace('/jpeg/i', 'jpg'); // all jpeg images to jpg;
    cb(
      null,
      `${file.originalname.replace(/\W|jpeg|jpg|png/g, '')}.${fileExtension}`
    ); // Removes non-words form filename
  },
});

const limits = (req, file, cb) => {
  const fileSize = 5 * 1024 * 1024; // 5MB max file size
  if (file.size >= fileSize) {
    cb('Vous ne pouvez pas télécharger un fichier de plus de 5MB', false);
  } else {
    cb(null, false);
  }
};

module.exports = multer({storage: storage, fileFilter: imageFilter, limits});
