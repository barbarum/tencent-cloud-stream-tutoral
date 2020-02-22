from future import standard_library
standard_library.install_aliases()
import http.server
import socketserver

PORT = 9000

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()