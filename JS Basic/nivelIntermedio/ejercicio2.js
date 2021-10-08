let fecha = new Date();

console.log(fecha);

let year = fecha.getFullYear();
let month = fecha.getMonth() +1;
let day = fecha.getDate();
let hour = fecha.getHours() + ":" + fecha.getMinutes();


let formatoFecha = `El día es: ${day} del ${month} del año ${year} y la hora actual es: ${hour}`;
console.log(formatoFecha);

console.log(`El día es: ${day} del ${month} del año ${year} y la hora actual es: ${hour}`);