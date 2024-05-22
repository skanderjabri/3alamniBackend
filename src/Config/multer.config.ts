import { diskStorage } from 'multer';
import { extname } from 'path';

export const multerConfig = {
  storage: diskStorage({
    destination: './public/uploads/users',
    filename: (req, file, callback) => {
      const extension = extname(file.originalname);
      console.log(file.originalname);
      console.log(extension);
      const randomName = '3lamani' + Date.now() + extension;
      callback(null, randomName);
    },
  }),
  fileFilter: (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif|pdf)$/)) {
      return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
  },
};
