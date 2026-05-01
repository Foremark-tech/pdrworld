import os, re

base = r'c:\Users\SEBIN\Downloads\PDR world Frontend'
pages = ['index.html', 'products.html', 'about.html', 'solutions.html', 'resources.html', 'contact.html']

css_link = '  <link rel="stylesheet" href="phase5-polish.css">'

for page in pages:
    fp = os.path.join(base, page)
    with open(fp, 'r', encoding='utf-8') as f:
        content = f.read()

    if 'phase5-polish.css' in content:
        print(f"Already linked: {page}")
        continue

    # Insert before </head>
    content = content.replace('</head>', css_link + '\n</head>')

    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Linked: {page}")

print("Done.")
