const http = require('http')
const fs = require('fs')
const port = 80

const server = http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', function(error, data) {
        if (error) {
            res.writeHead(404)
            res.write('Error: File not found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, (err) => {
    if (err) {
        console.log('Something went wrong ', err)
    } else {
        console.log('Server is listening on port ' , port)
    }
})