const socket= io.connect('https://chat-app-web-socket.herokuapp.com/')                   // connection to the localhost

// Dom 
const output= document.getElementById('output');
const handle= document.getElementById('handle');
const message= document.getElementById('message');
const send= document.getElementById('send');
const feedback= document.getElementById('feedback');

const toast_btn=document.getElementById("toast-button")
const modal_body=document.getElementById("modal-body")
const close_instruction=document.getElementById("close_instruction")

send.addEventListener('click',()=>{                             // emiting message to the server
    socket.emit('chat',{
        message: message.value,
        handle: handle.value
    });
    message.value=""
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

toast_btn.onclick=()=>{
toast.style.display="block"
}

close_instruction.onclick=()=>{
    modal_body.style.display="none"
    close_instruction.style.display="none"
    }
    
toast_btn.onclick=()=>{
    modal_body.style=""
    close_instruction.style.display=""
}