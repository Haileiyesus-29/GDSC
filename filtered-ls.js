const fs = require("fs");

const path = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(path, (err, list) => {
    const result = list.filter(
        (li) => li.toString().slice(-ext.length) === ext
    );
    result.forEach((res) => console.log(res));
});
