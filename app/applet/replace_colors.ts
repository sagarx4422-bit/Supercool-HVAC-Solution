import * as fs from 'fs';
import * as path from 'path';

const directory = '/app/applet';

const replacements = [
  { regex: /text-blue-600/g, replacement: 'text-[#1A65FF]' },
  { regex: /bg-blue-600/g, replacement: 'bg-[#1A65FF]' },
  { regex: /text-\[\#004494\]/g, replacement: 'text-[#1A65FF]' },
  { regex: /bg-\[\#004494\]/g, replacement: 'bg-[#1A65FF]' },
  { regex: /hover:text-blue-600/g, replacement: 'hover:text-[#1A65FF]' },
  { regex: /hover:bg-blue-700/g, replacement: 'hover:bg-[#1450CC]' },
  { regex: /hover:bg-\[\#003377\]/g, replacement: 'hover:bg-[#1450CC]' },
  { regex: /shadow-blue-600\/20/g, replacement: 'shadow-[#1A65FF]/20' },
  { regex: /shadow-\[\#004494\]\/20/g, replacement: 'shadow-[#1A65FF]/20' },
  { regex: /border-blue-500\/30/g, replacement: 'border-[#1A65FF]/30' },
  { regex: /bg-blue-500\/5/g, replacement: 'bg-[#1A65FF]/5' },
  { regex: /ring-blue-500\/30/g, replacement: 'ring-[#1A65FF]/30' },
  { regex: /text-blue-700/g, replacement: 'text-[#1450CC]' },
  { regex: /bg-blue-100/g, replacement: 'bg-[#1A65FF]/10' },
];

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next') && !fullPath.includes('.git')) {
        processDirectory(fullPath);
      }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const { regex, replacement } of replacements) {
        if (regex.test(content)) {
          content = content.replace(regex, replacement);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
