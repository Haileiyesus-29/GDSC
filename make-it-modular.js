const filterFunc = require("./mymodule.js");

const filePath = process.argv[2];
const ext = process.argv[3];

filterFunc(filePath, ext, filtered);

function filtered(err, data) {
    if (err) {
        console.log(err);
        return;
    }
    data.forEach((element) => {
        console.log(element);
    });
}
