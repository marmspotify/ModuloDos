let saldoCuenta= document.getElementById("saldoCuenta");
let cuenta= JSON.parse(localStorage.getItem('cuenta'));
saldoCuenta.innerText= "$"+ cuenta.saldo;

document.getElementById("regresar").addEventListener("click", regresar);

function regresar() {      
    console.log("Regreso a operación por "+ cuenta.nombre);
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    location.href= "operacion.html";        
}