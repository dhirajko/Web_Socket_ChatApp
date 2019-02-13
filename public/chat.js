const socket= io.connect('http://localhost:3000')                   // connection to the localhost

// Dom 
const output= document.getElementById('output');
const handle= document.getElementById('handle');
const message= document.getElementById('message');
const send= document.getElementById('send');
const feedback= document.getElementById('feedback');


send.addEventListener('click',()=>{                             // emiting message to the server
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
})

message.addEventListener('keypress', ()=>{
    socket.emit('typing',handle.value)
})

socket.on('chat', (data)=>{
    feedback.innerHTML="";
    output.innerHTML+='<p><strong>'+data.handle+' : </strong>' + data.message+ '</p>'
})

socket.on('typing', (data)=>{
    feedback.innerHTML='<p><em>'+ data+' is typing ...</em></p>'
})