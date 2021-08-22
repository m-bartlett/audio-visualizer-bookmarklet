#!/usr/bin/env python3
import BaseHTTPServer, SimpleHTTPServer
#import http
import ssl

#BaseHTTPServer = http.server.HTTPServer

httpd = BaseHTTPServer.HTTPServer(('localhost', 4443), SimpleHTTPServer.SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./localhost.pem', server_side=True)
httpd.serve_forever()
