const https = require('https')
const fs = require('fs')
const finalhandler = require('finalhandler')
const serveStatic = require('serve-static')

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/vovchisko.dev/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/vovchisko.dev/cert.pem')
}

// Serve up public/ftp folder
const serve = serveStatic('./dist', {'index': ['index.html']})

https.createServer(options, function (req, res) {
  serve(req, res, finalhandler(req, res))
}).listen(4443);

