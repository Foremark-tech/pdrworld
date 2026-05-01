const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../ezgif-1d862653b0490366-jpg');
const destDir = path.join(__dirname, '../frames');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
  if (file.endsWith('.jpg')) {
    // ezgif-frame-001.jpg -> fiber_001.jpg
    const match = file.match(/ezgif-frame-(\d+)\.jpg/);
    if (match) {
      const num = match[1];
      const newName = `fiber_${num}.jpg`;
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, newName));
      console.log(`Copied ${file} to ${newName}`);
    }
  }
});

console.log('Frames prepared.');
