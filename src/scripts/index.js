let cuentas = [
  { nombre: "Mali", password:"123", saldo: 200 },
  { nombre: "Gera", password:"456", saldo: 290 },
  { nombre: "Maui", password:"789", saldo: 67 }
];

let selectDatoCuenta= document.getElementById("datoCuenta");
let selectDatoPassword= document.getElementById("datoPassword");


for(i= 0; i< cuentas.length; i++) {
    let option = document.createElement("option"); //Creamos la opcion
    option.innerHTML = cuentas[i].nombre; //Metemos el texto en la opción
    selectDatoCuenta.appendChild(option); //Metemos la opción en el select
}

document.getElementById("validarAcceso").addEventListener("click", validarAcceso);

function isCuenta(cuenta) {
    return cuenta.nombre=== selectDatoCuenta.value;
}

function validarAcceso() {  
    if(selectDatoPassword.value==="")
        alert("Favor de capturar contraseña.");
    else {
        let cuenta= cuentas.find(isCuenta);
        if(cuenta.password===selectDatoPassword.value) {
            console.log("Acceso concedido a "+ selectDatoCuenta.value+ ", su saldo es de $"+ cuenta.saldo);
            localStorage.setItem("cuenta", JSON.stringify(cuenta));
            location.href= "./src/pages/operacion.html";
        }            
        else {
            alert("La contraseña es erronea, favor de ingresarla nuevamente.");
            selectDatoPassword.value= "";
        }
    }                
}