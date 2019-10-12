import glob, yaml, pathlib

docsDir = 'docsDir'
header_template = '''---
tags: [Reference/{tag}]
title: {title}
created: '2019-09-08T22:55:03.662Z'
modified: '2019-10-12T15:10:26.701Z'
---
# {title}
'''

md_files = glob.glob(f'{docsDir}/**/*.md', recursive=True)

for md_file in md_files:
  with open(md_file) as f:
    text = f.read()

  name = pathlib.Path(md_file).name
  title = name.replace('.md', '')
  tag = md_file.replace('docsDir/', '').replace(f'/{name}', '')
  new_name = md_file.replace('docsDir/', '')
  new_title = f'{tag.replace("/", "_")} -- {title}'.title()
  header = header_template.format(tag=tag, title=new_title)
  new_text = header + text
  new_path = f'reference/{new_title}.md'
  
  with open(new_path, 'w') as f:
    f.write(new_text)