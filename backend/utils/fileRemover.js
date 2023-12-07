import fs from "fs";
import path from "path";

export const fileRemover = (filename) => {
  fs.unlink(path.join(__dirname, "../uploads"), function (err) {
    if (err && err.code == "ENOENT") {
      console.log(`file name${filename} doent exits, won't remove it.`);
    } else if (err) {
      console.log(`Error occured while trying to remove file ${filename}`);
    } else {
      console.log(`removed ${filename}`);
    }
  });
};
