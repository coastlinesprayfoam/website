#!/bin/bash

echo "Starting Coastline Spray Foam Website..."

# Build the site
echo "Building static site..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
else
    echo "Build failed!"
    exit 1
fi

# Change to the dist/public directory
cd dist/public

# Start the server
echo "Starting server on port 8000..."
python3 -m http.server 8000