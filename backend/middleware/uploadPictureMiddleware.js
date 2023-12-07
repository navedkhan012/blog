import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, res, cb) => {
    console.log("file.orignalName------>", file);
    cb(null, `${Date.now()}-${file.orignalName}`);
  },
});
export const uploadPicture = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 100000, //5 MB
  },
  fileFilter: function (req, res, cb) {
    let ext = path.extname(file.orignalName);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
});
