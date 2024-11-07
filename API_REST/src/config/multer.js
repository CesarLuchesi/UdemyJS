import multer from "multer";
import { extname, resolve } from "path";

export default {
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = () => Math.floor(Math.random() * 10000 + 10000);
      cb(null, `${Date.now()}_${uniqueSuffix()}${extname(file.originalname)}`);
    },
  }),
};
