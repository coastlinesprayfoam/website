#!/bin/bash

echo "Building static deployment..."

# Clean any previous builds
rm -rf dist/

# Create dist directory structure expected by static deployment
mkdir -p dist

# Build frontend with reduced complexity
cd client
NODE_ENV=production npx vite build --outDir ../dist --emptyOutDir

# Check if build succeeded
if [ -f "../dist/index.html" ]; then
    echo "✅ Static build completed successfully"
    echo "📁 Build output ready for deployment"
else
    echo "❌ Build failed"
    exit 1
fi