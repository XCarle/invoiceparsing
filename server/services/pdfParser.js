exports.extractVatNumbersFromFile = (file) => {

  const fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = function(e){
    console.log(fileReader.result);
  };

  return new Promise((resolve, reject) => resolve(console.log("hello world")));
  //return new Promise((resolve, reject) => reject(new Error('Not implemented yet!')));
};
