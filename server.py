#!/usr/bin/env python3
import http.server
import socketserver
import os
import subprocess
from pathlib import Path

def build_site():
    """Build the static site"""
    print("🔨 Building static site...")
    try:
        result = subprocess.run(["npm", "run", "build"], 
                              capture_output=True, text=True, timeout=60)
        if result.returncode == 0:
            print("✅ Build successful")
            return True
        else:
            print(f"❌ Build failed: {result.stderr}")
            return False
    except Exception as e:
        print(f"❌ Build error: {e}")
        return False

def start_server():
    """Start the development server"""
    # Ensure site is built
    if not build_site():
        print("Cannot start server without successful build")
        return
    
    # Change to dist/public directory  
    dist_dir = Path("dist/public")
    if not dist_dir.exists():
        print(f"❌ Directory {dist_dir} not found")
        return
        
    os.chdir(dist_dir)
    print(f"📁 Serving from: {dist_dir.absolute()}")
    
    PORT = 8000
    
    class Handler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'no-cache')
            super().end_headers()
        
        def log_message(self, format, *args):
            print(f"📡 {format % args}")
    
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
            print(f"🚀 Server running at http://localhost:{PORT}")
            print("✅ Website preview is now available!")
            print("Press Ctrl+C to stop the server")
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Port {PORT} is already in use")
        else:
            print(f"❌ Server error: {e}")
    except KeyboardInterrupt:
        print("\n🛑 Server stopped")

if __name__ == "__main__":
    start_server()