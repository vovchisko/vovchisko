const WEB_PORT = '4200'
const WEB_ROOT = './dist'

const path = require('path')
const app = require('fastify')({ logger: false })

app.register(require('fastify-static'), { root: path.resolve(WEB_ROOT) })

app.setNotFoundHandler((req, res) => {
  // API 404
  if (req.raw.url && req.raw.url.startsWith('/api')) {
    return res.status(404).send({
      success: false,
      error: {
        kind: 'user_input',
        message: 'Not Found',
      },
    })
  }

  // Vue SPA
  res.status(200).sendFile('index.html')
})

app.listen(WEB_PORT)

console.log('served on', { WEB_ROOT, WEB_PORT })
