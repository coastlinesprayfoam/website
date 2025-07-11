#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('Copying static files to dist/public...');

// Copy main files to dist/public
const filesToCopy = [
    'index.html',
    'services.html',
    'sitemap.xml',
    'robots.txt',
    'manifest.json'
];

const directoriesToCopy = [
    'assets'
];

// Ensure dist/public exists
if (!fs.existsSync('dist/public')) {
    fs.mkdirSync('dist/public', { recursive: true });
}

// Copy files
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('dist/public', file));
        console.log(`Copied ${file}`);
    }
});

// Copy directories recursively
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const items = fs.readdirSync(src);
    items.forEach(item => {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);

        if (fs.statSync(srcPath).isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}

directoriesToCopy.forEach(dir => {
    if (fs.existsSync(dir)) {
        copyDir(dir, path.join('dist/public', dir));
        console.log(`Copied ${dir}/ directory`);
    }
});

console.log('Static site generation completed!');