import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '..', 'out', '.nojekyll');

fs.writeFileSync(filePath, '');
console.log('.nojekyll 파일이 생성되었습니다.');