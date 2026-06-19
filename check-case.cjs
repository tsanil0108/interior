// check-case.cjs
const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(process.cwd(), 'src');
const IMPORT_RE = /\bfrom\s+['"](\.\.?\/[^'"]+)['"]/g;
const EXTENSIONS = ['', '.jsx', '.js', '.css', '.json', '.ts', '.tsx'];

let mismatches = [];
let checkedCount = 0;

function walk(dir, cb) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') continue;
      walk(full, cb);
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      cb(full);
    }
  }
}

function resolveActualCase(absPathNoExt) {
  const dir = path.dirname(absPathNoExt);
  const base = path.basename(absPathNoExt);

  if (!fs.existsSync(dir)) return null;

  let dirEntries;
  try {
    dirEntries = fs.readdirSync(dir);
  } catch {
    return null;
  }

  for (const ext of EXTENSIONS) {
    const target = base + ext;
    const found = dirEntries.find(f => f.toLowerCase() === target.toLowerCase());
    if (found) {
      return { found, target, exact: found === target };
    }
  }
  return null;
}

walk(SRC_DIR, file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  IMPORT_RE.lastIndex = 0;
  while ((match = IMPORT_RE.exec(content))) {
    const importPath = match[1];
    checkedCount++;
    const absPath = path.resolve(path.dirname(file), importPath);
    const result = resolveActualCase(absPath);

    const relFile = path.relative(process.cwd(), file);

    if (!result) {
      mismatches.push({
        file: relFile,
        importPath,
        issue: 'NOT FOUND on disk at all (check path/spelling)',
      });
    } else if (!result.exact) {
      mismatches.push({
        file: relFile,
        importPath,
        issue: `CASE MISMATCH: import says "${result.target}" but actual file is "${result.found}"`,
      });
    }
  }
});

console.log(`Checked ${checkedCount} relative imports.\n`);

if (mismatches.length === 0) {
  console.log('✅ No case mismatches found!');
} else {
  console.log(`❌ Found ${mismatches.length} issue(s):\n`);
  mismatches.forEach((m, i) => {
    console.log(`${i + 1}. ${m.file}`);
    console.log(`   import: "${m.importPath}"`);
    console.log(`   ${m.issue}\n`);
  });
}