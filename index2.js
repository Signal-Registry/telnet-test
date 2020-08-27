const fs = require('fs');
const path = require('path');

const dir = './data';

function init() {
    return fs.readdirSync(dir)
        // .filter(name => path.extname(name) === '.json')
        .map(name => require(path.join(__dirname, dir, name)))
        .filter(item => item.id == 'a')
}

console.log(init())
// console.log(require('data/item1.json'))