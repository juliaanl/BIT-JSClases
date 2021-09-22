/*Condicionales SWITCH
Funcionan similar a las condicionales,
con la diferencia de IF/ELSE esta solo se puede validar
una sola condicioón entre varios case. 
es utilizada cuando no necesitamos comparar, igualar o 
negar una condicion y otra. 
*/

let nombre = prompt("Ingresa tu nombre");
let edad = prompt ("Ingresa tu edad");

switch (edad) {
    case "18":
        alert("Tienes acceso al cátalogo de películas violentas.");
        break;

         case "25":
             alert("Tienes acceso al cátalogo de películas violentas.");
            break;

            case"35":
            alert("Tienes acceso al cátalogo de películas violentas.");
            break;


    default:
        alert("Debes tener las edades específicadas para acceder.");
        break;
}