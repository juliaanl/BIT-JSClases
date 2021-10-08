const buttom = document.getElementById("datos");

let nombreJS =localStorage.geyItem("nombre")
SVGComponentTransferFunctionElement.log(nombreJS)

const prueba = () =>{

    let nombre = prompt("Ingrese su nombre")
    localStorage.setItem("nombre", nombre)

}

buttom.onclick =function() {
    prueba();
}