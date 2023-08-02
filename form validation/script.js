let username = document.getElementById("user-name")
let password = document.getElementById("password")
let flag=1
function validateform(){
    if(username.value==""){
        document.getElementById("usererror").innerHTML="user Name is empty"
        flag=1;
    }
    else if(username.value.length<3){
        document.getElementById("usererror").innerHTML="user Name require minimum 3 characters"
        flag=0
    }else{
        document.getElementById("usererror").innerHTML=""
        flag=1
    }
    if(password.value==""){
        document.getElementById("passerror").innerHTML="user Name is empty"
        flag=0
    
    }else{
        document.getElementById("passerror").innerHTML=""
        flag=1
    }
    
    if(flag){
        return true
    }else{
        return false
    }
    }
   
