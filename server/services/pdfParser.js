exports.extractVatNumbersFromFile = (file) => {

  new pdfreader.PdfReader().parseFileItems('file', function(err, item){
    console.log("hello from pdf reader");
    if (!item || item.page) {
      // end of file, or page
      printRows();
      console.log('PAGE:', item.page);
      rows = {}; // clear rows for next page
    }
    else if (item.text) {
      // accumulate text items into rows object, per line
      (rows[item.y] = rows[item.y] || []).push(item.text);
    }
  });

  return new Promise((resolve, reject) => resolve(console.log("hello world")));
  //return new Promise((resolve, reject) => reject(new Error('Not implemented yet!')));
};
