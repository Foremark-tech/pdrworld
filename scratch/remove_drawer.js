const fs = require('fs');
let html = fs.readFileSync('products.html', 'utf-8');

// Find and remove the drawer HTML
const drawerStart = html.indexOf('<div class="pr-drawer" id="productDrawer" aria-hidden="true">');
if (drawerStart !== -1) {
    const drawerEnd = html.indexOf('</div>\n</div>\n\n<footer', drawerStart);
    if (drawerEnd !== -1) {
        html = html.substring(0, drawerStart) + html.substring(drawerEnd + 14); // +14 skips "</div>\n</div>\n\n"
    } else {
        console.log('Could not find drawer end');
    }
} else {
    console.log('Could not find drawer start');
}

// Find and remove the productData script block
const scriptStart = html.indexOf('<script>');
if (scriptStart !== -1) {
    const scriptEnd = html.indexOf('</script>', scriptStart);
    if (scriptEnd !== -1) {
        html = html.substring(0, scriptStart) + html.substring(scriptEnd + 9);
    }
}

// Also remove inline styles for the drawer since they are no longer needed
const styleStart = html.indexOf('/* ===== DRAWER CSS ===== */');
if (styleStart !== -1) {
    const styleEnd = html.indexOf('/* ===== END DRAWER CSS ===== */', styleStart);
    if (styleEnd !== -1) {
        html = html.substring(0, styleStart) + html.substring(styleEnd + 32);
    }
}

fs.writeFileSync('products.html', html);
console.log('Drawer removed successfully from products.html');
