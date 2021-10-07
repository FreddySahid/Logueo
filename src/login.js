function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value

    if(username =="root" && password =="123456"){
        alert("Inicio exitoso");
        return true;
        
        
        
    }else{
        alert("Usuario incorrecto");
        
    }
    
    
}