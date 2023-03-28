const fs = require("fs");
const path = require("path");

module.exports = (filePath, ext, callback) => {
    ext = "." + ext;
    fs.readdir(filePath, (err, folder) => {
        if (err) {
            callback(err);
            return;
        }
        const filtered = folder.filter((file) => path.extname(file) === ext);
        callback(null, filtered);
    });
};
