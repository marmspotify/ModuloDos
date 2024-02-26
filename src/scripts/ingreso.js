const montoMaximo= 990;

let montoDeposito= document.getElementById("montoDeposito");
let cuenta= JSON.parse(localStorage.getItem('cuenta'));

document.getElementById("depositar").addEventListener("click", depositar);
document.getElementById("regresar").addEventListener("click", regresar);

function regresar() {      
    console.log("Regreso a operación por "+ cuenta.nombre);
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    location.href= "operacion.html";        
}

function depositar() {      
    console.log("Deposito de monto a la cuenta");
    let montoActual= Number.parseFloat(montoDeposito.value)+ Number.parseFloat(cuenta.saldo);
    if(montoActual> montoMaximo) {
        alert("El monto de su cuenta no puede exceder de $990.");    
        montoDeposito.value= "";
    } 
    else {
        cuenta.saldo= montoActual;
        localStorage.setItem("cuenta", JSON.stringify(cuenta));
        location.href= "consulta.html";        
    }
    
}