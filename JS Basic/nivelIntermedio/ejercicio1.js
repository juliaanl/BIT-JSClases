
let fecha = new Date();

console.log(fecha);

let year = fecha.getFullYear();
let month = fecha.getMonth() +1;
let day = fecha.getDate();
let hours = fecha.getHours() + ":" + fecha.getMinutes();

console.log(year + "/" + month + "/" + day + ":" + hours); 