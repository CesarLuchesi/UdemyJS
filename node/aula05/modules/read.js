const fs = require('fs').promises;

module.exports = (path) => {
    return fs.readFile(path, 'utf-8');
} 