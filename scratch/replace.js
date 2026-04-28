const fs = require('fs');
const file = '../index.html';
let content = fs.readFileSync(file, 'utf8');

// Use string splitting and joining for safety
function replaceAll(str, find, replace) {
  return str.split(find).join(replace);
}

content = replaceAll(content, '--bg:#040A15; --bg-2:#0A1424; --bg-3:#0E1A2D;', '--bg:#09090B; --bg-2:#18181B; --bg-3:#27272A;');
content = replaceAll(content, '--surface:#FFFFFF; --surface-2:#F7F9FC; --surface-3:#EEF2F7;', '--surface:#FFFFFF; --surface-2:#FAFAFA; --surface-3:#F4F4F5;');
content = replaceAll(content, '--accent:#F26B26; --accent-2:#FF8A55; --accent-soft:rgba(242,107,38,.12);', '--accent:#E11D48; --accent-2:#F43F5E; --accent-soft:rgba(225,29,72,.12);');
content = replaceAll(content, '--ink:#0B1322; --ink-2:#1F2A3D; --muted:#5A6779; --soft:#94A3B8;', '--ink:#09090B; --ink-2:#27272A; --muted:#71717A; --soft:#A1A1AA;');
content = replaceAll(content, '--line:#E4E9F0; --line-dark:rgba(255,255,255,.09);', '--line:#E4E4E7; --line-dark:rgba(255,255,255,.09);');

content = replaceAll(content, 'rgba(11,19,34,', 'rgba(0,0,0,');
content = replaceAll(content, '#040A15', '#09090B');
content = replaceAll(content, '#9BA8BC', '#A1A1AA');
content = replaceAll(content, '#0B1424', '#18181B');
content = replaceAll(content, 'rgba(4,10,21,', 'rgba(9,9,11,');
content = replaceAll(content, '#C0CADA', '#D4D4D8');
content = replaceAll(content, '#7A8699', '#A1A1AA');
content = replaceAll(content, '#A8B5C9', '#D4D4D8');
content = replaceAll(content, '#142442', '#27272A');
content = replaceAll(content, '#3D4D6E', '#52525B');
content = replaceAll(content, 'rgba(11,20,36,', 'rgba(24,24,27,');
content = replaceAll(content, '#0F1B30', '#18181B');
content = replaceAll(content, '#1F2C46', '#27272A');
content = replaceAll(content, 'rgba(242,107,38,', 'rgba(225,29,72,');
content = replaceAll(content, '#E0591A', '#BE123C');
content = replaceAll(content, '#CBD5E1', '#D4D4D8');
content = replaceAll(content, '#020610', '#000000');
content = replaceAll(content, '#F26B26', '#E11D48');

fs.writeFileSync(file, content, 'utf8');
console.log('Colors replaced successfully');
