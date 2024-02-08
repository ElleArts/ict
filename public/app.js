let username=document.getElementById('username')
let email=document.getElementById('email')
let number=document.getElementById('number')
let description=document.getElementById('description')

let message=document.getElementById('msg')
let button=document.getElementById('btn_reg')

button.addEventListener('click', function(e){
    e.preventDefault()
    if(username.value=="" || email.value=="" || number.value=="" || description.value==""){
        alert("Please, Fill in all fields!")

    setTimeout(()=>{
        window.location.reload()
    },2000)

    }
    else {
        message.innerHTML=" Hi "   +  username.value  +   "! Your inquiry was successfully submitted!!!" 

        setTimeout(()=>{
            window.location.href="/training"
        },2000)
    }
    
   

});