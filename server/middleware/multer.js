// import multer from "multer";
// import fs from "fs";

// const uploadDirectory = "uploads/";

// // Check if the directory exists, if not, create it
// if (!fs.existsSync(uploadDirectory)) {
//   fs.mkdirSync(uploadDirectory);
// }

// // Define storage for uploaded photos
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDirectory); // specify the directory where uploaded photos will be stored
//   },
//   filename: function (req, file, cb) {
//     // specify how uploaded files should be named
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

// // Initialize multer with storage options
// export const upload = multer({ storage: storage }).single("image");

import multer from 'multer'

const storage = multer.memoryStorage()

const upload = multer({ storage : storage })

export default upload