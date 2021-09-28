//Ingresar uno de los 32 departamentos y decir cual es su respectivo departamneto.

const departamentos = () => {
  let departamento = prompt("Ingresa el nombre de un Departamento de Colombia (Inicial Mayus)");

  switch (departamento) {
    case "Amazonas":
      alert("Leticia");
      break;

    case "Antioquia":
      alert("Medellín");
      break;

    case "Arauca":
      alert("Arauca");
      break;

    case "Atlántico":
      alert("Barranquilla");
      break;

    case "Bolívar":
      alert("Cartagena de Indias");
      break;

    case "Boyacá":
      alert("Tunja");
      break;

    case "Caldas":
      alert("Manizales");
      break;

    case "Caquetá":
      alert("Florencia");
      break;

    case "Casanare":
      alert("Yopal");
      break;

    case "Cauca":
      alert("Popayán");
      break;

    case "Cesar":
      alert("Valledupar");
      break;

    case "Chocó":
      alert("Quibdó");
      break;

    case "Córdoba":
      alert("Montería");
      break;

    case "Cundinamarca":
      alert("Bogota D.C");
      break;

    case "Guainía":
      alert("Inírida");
      break;

    case "Guaviare":
      alert("San José del Guaviare");
      break;

    case "Huila":
      alert("Neiva");
      break;

    case "La Guajira":
      alert("Riohacha");
      break;

    case "Magdalena":
      alert("Santa Marta");
      break;

    case "Meta":
      alert("Villavicencio");
      break;

    case "Nariño":
      alert("San Juan de Pasto");
      break;

    case "Norte de Santander":
      alert("San José de Cúcuta");
      break;

    case "Putumayo":
      alert("Mocoa");
      break;

    case "Quindío":
      alert("Armenia");
      break;

    case "Risaralda":
      alert("Pereira");
      break;

    case "San Andrés y Providencia":
      alert("San Andrés");
      break;

    case "Santander":
      alert("Bucaramanga");
      break;

    case "Sucre":
      alert("Sincelejo");
      break;

    case "Tolima":
      alert("Ibagué");
      break;

    case "Tolima":
      alert("Ibagué");
      break;

    case "Valle del Cauca":
      alert("Cali");
      break;

    case "Vaupés":
      alert("Mitú");
      break;

    case "Vichada":
      alert("Puerto Carreño");
      break;

    default:
      alert("¡Ups! Ingresa un departamento valido");
      break;
  }
};
