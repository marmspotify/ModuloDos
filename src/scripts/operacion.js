let accesoCuenta= document.getElementById("accesoCuenta");
let cuenta= JSON.parse(localStorage.getItem('cuenta'));
accesoCuenta.innerText= "Bienvenido "+ cuenta.nombre;
console.log("Ingreso a operación.");

document.getElementById("consultaSaldo").addEventListener("click", consultarSaldo);
document.getElementById("ingresoMonto").addEventListener("click", ingresarSaldo);
document.getElementById("retiroMonto").addEventListener("click", retirarMonto);
document.getElementById("salir").addEventListener("click", salir);

function consultarSaldo() {      
    console.log("Operación de consulta de saldo por "+ cuenta.nombre);
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    location.href= "consulta.html";        
}

function ingresarSaldo() {      
    console.log("Operación de ingreso de monto por "+ cuenta.nombre);
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    location.href= "ingreso.html";        
}

function retirarMonto() {      
    console.log("Operación de retiro de monto por "+ cuenta.nombre);
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    location.href= "retiro.html";        
}

function salir() {      
    console.log("Salir de Operación por "+ cuenta.nombre);
    localStorage.removeItem("cuenta");    
    location.href= "/CajeroAutomatico/index.html";        
}