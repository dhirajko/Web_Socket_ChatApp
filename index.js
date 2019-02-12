const express= require('express');
const socket=require('socket.io')



const app= express();

app.use(express.static('public'))

const server=app.listen(3000, ()=>{
    console.log('Connected to port 3000');
    
})

const io=socket(server);
io.on('connection',function(socket) {
    console.log('made socket connection');
    
})