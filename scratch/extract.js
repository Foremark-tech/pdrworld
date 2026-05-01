const fs = require('fs');

const content = fs.readFileSync('products.html', 'utf-8');
const startMatch = 'const productData = {';
const startIndex = content.indexOf(startMatch);

if (startIndex === -1) {
    console.error('productData not found');
    process.exit(1);
}

let openBraces = 0;
let endIndex = -1;
let i = startIndex + startMatch.length - 1; // start at '{'

for (; i < content.length; i++) {
    if (content[i] === '{') openBraces++;
    else if (content[i] === '}') openBraces--;
    
    if (openBraces === 0) {
        endIndex = i + 1;
        break;
    }
}

if (endIndex === -1) {
    console.error('Could not find end of productData');
    process.exit(1);
}

const objStr = content.substring(startIndex, endIndex).replace('const productData = ', '');
fs.writeFileSync('scratch/productData.js', 'module.exports = ' + objStr + ';');
console.log('Successfully extracted productData to scratch/productData.js');
