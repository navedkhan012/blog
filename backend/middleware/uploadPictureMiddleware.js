import multer from "multer";
import path from "path";

const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
export const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 100000, //5 MB
  },
  fileFilter: function (req, file, cb) {
    let ext = path.extname(file.originalname);
    // if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
    //   return cb(new Error("Only images are allowed"));
    // }
    cb(null, true);
  },
});
