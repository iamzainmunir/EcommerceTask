import app from './app'
import * as http from 'http'
const PORT = 3000
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT)
})
