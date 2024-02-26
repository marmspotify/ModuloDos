const montoMinimo= 10;

let montoRetiro= document.getElementById("montoRetiro");
let cuenta= JSON.parse(localStorage.getItem('cuenta'));

document.getElementById("retirar").addEventListener("click", retirar);
document.getElementById("regresar").addEventListener("click", regresar);

function regresar() {      
    console.log("Regreso a operación por "+ cuenta.nombre);
    localStorage.setItem("cuenta", JSON.stringify(cuenta));
    location.href= "operacion.html";        
}

function retirar() {      
    console.log("Retiro de monto a la cuenta");
    if(montoRetiro.value!= "") {
        if(Number.parseFloat(montoRetiro.value)> Number.parseFloat(cuenta.saldo)) {
            alert("El monto de retiro es mayor que el disponible.");
            montoRetiro.value= "";
        } 
        else {
            let montoRestante= Number.parseFloat(cuenta.saldo)- Number.parseFloat(montoRetiro.value);
            if(montoRestante< 10) {
                alert("La cuenta debe tener por lo menos $10.");
                montoRetiro.value= "";
            }
            else {
                cuenta.saldo= montoRestante;
                localStorage.setItem("cuenta", JSON.stringify(cuenta));
                location.href= "consulta.html";        
            }
        }    
    }
    else {
        alert("Debe capturar un monto a retirar.");
    }

}