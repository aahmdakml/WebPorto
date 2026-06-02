import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/assets/CV_Ahmad_Akmal_Defatra.pdf');

// Sometimes pdfParse is wrapped in a default object when required
const parse = typeof pdfParse === 'function' ? pdfParse : (pdfParse.default || pdfParse.pdf);

parse(dataBuffer).then(function(data) {
    fs.writeFileSync('cv_extracted.txt', data.text);
    console.log('Extraction complete.');
}).catch(err => {
    console.error(err);
});
