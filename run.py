#!/usr/bin/env python3
import http.server
import socketserver
import os
import subprocess
from pathlib import Path

def main():
    # Build the static site
    print("Building static site...")
    result = subprocess.run(["npm", "run", "build"], capture_output=True, text=True)
    if result.returncode == 0:
        print("✓ Static site built successfully")
    else:
        print(f"Build error: {result.stderr}")
        return

    # Change to the dist/public directory
    dist_public = Path(__file__).parent / "dist" / "public"

    if not dist_public.exists():
        print(f"Error: {dist_public} does not exist")
        return

    os.chdir(dist_public)
    PORT = 8000

    print(f"Starting Coastline Spray Foam website...")
    print(f"Server: http://localhost:{PORT}")
    print(f"Directory: {dist_public.absolute()}")

    class Handler(http.server.SimpleHTTPRequestHandler):
        def end_headers(self):
            self.send_header('Access-Control-Allow-Origin', '*')
            super().end_headers()

    # Start the server
    try:
        with socketserver.TCPServer(("0.0.0.0", PORT), Handler) as httpd:
            print("✓ Website preview is now available!")
            httpd.serve_forever()
    except Exception as e:
        print(f"Server error: {e}")
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == "__main__":
    main()