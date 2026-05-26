#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    
    # Create a simple HTTP server to serve the build
    echo "Starting HTTP server on port 8080..."
    echo "Open http://localhost:8080 in your browser"
    
    # For Windows, provide alternative instructions
    echo ""
    echo "For Windows users:"
    echo "1. Install a static server: npm install -g serve"
    echo "2. Run: serve -s build"
    echo "3. Open http://localhost:3000 in your browser"
else
    echo "Build failed!"
    exit 1
fi