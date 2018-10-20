const {
    readFile,
    writeFile
} = require("fs");

exports.read = url => new Promise((resolve, reject) =>
    readFile(url, 'utf8', (error, data) => error ? reject(error) : resolve(data))
);

exports.write = (url, data) => new Promise((resolve, reject) =>
    writeFile(url, data, (error) => error ? reject(error) : resolve())
);