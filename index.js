const express= require('express');
const socket=require('socket.io')



const app= express();

app.use(express.static('public'))

const server=app.listen(process.env.PORT||3000, '0.0.0.0')
  
    


const io=socket(server);                                        // connecting the socket in the express server on port 3000
io.on('connection',function(socket) {
    console.log('made socket connection',socket.id);
    
    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing',data)
    })

})