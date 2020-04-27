const express = require("express")
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = process.env.PORT || 3000;

app.use(express.static('src'))


app.get('/' , (req, res)=>{
    res.sendFile(__dirname+'/index.html')
})



io.on('connection' , (socket)=>{{
    console.log('user id: '+ socket.id+' connected!')
    
}})





http.listen( port, ()=>{
    console.log("app listening on port "+port)
} )