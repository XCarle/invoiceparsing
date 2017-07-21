const pdfParserService = require('../services/pdfParser');

exports.extractVatNumbers = (req, res, next) => {

  console.log(req.query.file);
  const file = req.query.file;

  console.log("file : ",file);
  if (!file) {
    console.log('no file found', req.body);
    return res.status(400).json({ err: 'No file found' });
  }

  return pdfParserService
    .extractVatNumbersFromFile(file)
    .then(vatNumbers => res.json(vatNumbers))
    .catch(next);
};
