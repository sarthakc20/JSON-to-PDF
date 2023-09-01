const PDFMerger = require('pdf-merger-js');
const path = require("path");

let merger = new PDFMerger();

exports.mergePdfs = async (p1, p2) => {
  await merger.add(p1); 
  await merger.add(p2); 

  await merger.save(path.join(__dirname, "../uploads/merged.pdf")); //save under given name and reset the internal document
};