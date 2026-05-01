import os, re

BASE = r'c:\Users\SEBIN\Downloads\PDR world Frontend'
PAGES = ['index.html', 'products.html', 'about.html', 'solutions.html', 'resources.html', 'contact.html']

for page in PAGES:
    fp = os.path.join(BASE, page)
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Remove PHASE 4 comments
    content = re.sub(r'\s*<!-- PHASE \d+:.*?-->', '', content)

    # Remove any remaining section comments that are developer-facing
    # Keep structural section comments (===== SECTION X: =====) - these are useful
    # but remove internal fix/debug annotations

    # Remove CRITICAL/MAJOR references
    content = re.sub(r'\s*<!-- CRITICAL:.*?-->', '', content)
    content = re.sub(r'\s*<!-- MAJOR:.*?-->', '', content)

    # Remove double >> that might result from comment removal in tag context
    content = re.sub(r'>\s*>', '>', content)
    
    # But restore legitimate >> in JS
    content = content.replace('array.map(a =', 'array.map(a =>')
    
    # Clean multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    if content != original:
        with open(fp, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Cleaned: {page}")
    else:
        print(f"No change: {page}")

print("Done.")
