const socket= io.connect('http://localhost:3000')                   // connection to the localhost

// Dom 
const output= document.getElementById('output');
const handle= document.getElementById('handle');
const message= document.getElementById('message');
const send= document.getElementById('send');


send.addEventListener('click',()=>{                             // emiting message to the server
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
})

socket.on('chat', (data)=>{
    output.innerHTML+='<p><strong>'+data.handle+'</strong>' + data.message+ '</p>'
})