const path = require('path');
const fs = require('fs');

module.exports = {
    swapKeysValues: (fromFileName, toFileName, newObjectName) => {
        const fromFilePath = path.join(process.cwd(), 'public', fromFileName);
        const toFilePath = path.join(process.cwd(), 'public', toFileName);
        if (fs.existsSync(fromFilePath) && !fs.existsSync(toFilePath)) {
            const fileContents = fs.readFileSync(fromFilePath, 'utf-8');
            const arr = fileContents.split(/\\r\\n|\\n|\\r|/).join('').match(/"[a-z\.]*?"/g);
            const keys = new Set();
            let str = `export const ${newObjectName} = { `;
            for (let i = 1; i < arr.length; i += 2) {
                const key = arr[i].toLowerCase();
                const value = arr[i - 1];
                // avoid duplicate keys
                if (!keys.has(key)) {
                    str += key + ': ' + value + ', ';
                    keys.add(key);
                }
            }
            str += ' };';
            fs.writeFileSync(toFilePath, str);
        }
    }
};