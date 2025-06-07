#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building frontend for static deployment...');

// Build the frontend only
execSync('npx vite build', { stdio: 'inherit' });

// Copy index.html to root of dist for static deployment
const distPublicPath = path.join(process.cwd(), 'dist/public');
const distPath = path.join(process.cwd(), 'dist');

if (fs.existsSync(path.join(distPublicPath, 'index.html'))) {
  // Copy index.html to dist root
  fs.copyFileSync(
    path.join(distPublicPath, 'index.html'),
    path.join(distPath, 'index.html')
  );
  
  // Copy all assets
  const files = fs.readdirSync(distPublicPath);
  files.forEach(file => {
    if (file !== 'index.html') {
      const srcPath = path.join(distPublicPath, file);
      const destPath = path.join(distPath, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        // Copy directory recursively
        fs.cpSync(srcPath, destPath, { recursive: true });
      } else {
        // Copy file
        fs.copyFileSync(srcPath, destPath);
      }
    }
  });
  
  console.log('✅ Static build completed successfully');
  console.log('📁 Files are ready in dist/ directory');
} else {
  console.error('❌ Build failed: index.html not found in dist/public');
  process.exit(1);
}