import os, re, glob

files = glob.glob(r'c:\Users\SEBIN\Downloads\PDR world Frontend\*.html')

for filepath in files:
    basename = os.path.basename(filepath)
    if basename.startswith('_archive'):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Fix the broken WhatsApp anchor tag: remove the HTML comment from inside the <a> tag
    # Pattern: title="..." <!-- FIX: MINOR 8 - WhatsApp tooltip -->>
    # Should be: title="...">
    fixed = content.replace(
        '<!-- FIX: MINOR 8 - WhatsApp tooltip -->>',
        '> <!-- FIX: MINOR 8 - WhatsApp tooltip -->'
    )
    
    # Also fix the variant where the comment has a space before >>
    fixed = fixed.replace(
        '" <!-- FIX: MINOR 8 - WhatsApp tooltip --> >',
        '"> <!-- FIX: MINOR 8 - WhatsApp tooltip -->'
    )
    
    if fixed != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fixed)
        print(f"Fixed WhatsApp tag in {basename}")
    else:
        print(f"No broken WhatsApp tag in {basename}")

print("Done.")
