const http = require('http')
const port = 5000

const server = http.createServer(function(request,response){
    response.write('Hello World!!')
    response.end()
})
//console.log("Hello World");

server.listen(port, function(error){
    if(error){
        console.log('Something went wrong', error)
    }
    else{
        console.log('Server is listening on port ' + port)
    }
})