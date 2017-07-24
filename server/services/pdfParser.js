exports.extractVatNumbersFromFile = (file) => {

const fs = require("fs");
const pdfReader = require('pdfreader');

fs.readFile(JSON.stringify(file), (err, pdfBuffer) => {
  // pdfBuffer contains the file content
  new pdfReader.PdfReader().parseBuffer(pdfBuffer, function(err, item){
    if (err)
      callback(err);
    else if (!item)
      callback();
    else if (item.text)
      console.log(item.text);
  });
});

  return new Promise((resolve, reject) => resolve(console.log("hello world")));
  //return new Promise((resolve, reject) => reject(new Error('Not implemented yet!')));
};
