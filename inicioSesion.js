let usuarios = [
    { usuario: "auditor@yelsan.com", contrasena: "123456789"}
];

let iniciarSesion = function(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for(let user  of usuarios){
        if(username  == user.usuario && password == user.contrasena){
            Function();
            alert("Bienvenido");
        }
        else{
            alert("Porfavor ingrese usuario y contraseña correctos");
        }
    }
    return false;
}

function Function(){
    location.href = "formularios.html";
}

//let form = document.getElementById("formaInicioSesion");
//form.onsubmit = iniciarSesion;