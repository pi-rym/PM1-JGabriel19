// Clase de las Actividades
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

//Clase de Repositorio
class Repository {
  constructor() {
    this.id = 0;
    this.activities = [];
  }

  //Un metodo que reciba datos de una actividad, cree una actividad y la guarde en su array
  addActivity(title, description, imgUrl) {
    const id = this.id++;
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  //Un metodo que le permite retornar todas las actividades
  getAllActivities() {
    return this.activities;
  }

  //Eliminar actividades deleteActivity
  deleteActivity(id) {
    return this.activities.filter((activity) => activity.id !== id);
  }
}

const repositorio = new Repository();
// repositorio.addActivity(
//   "Actividad 1",
//   "Descripción de la actividad 1",
//   "imagen1.jpg"
// );
// repositorio.addActivity(
//   "Actividad 2",
//   "Descripción de la actividad 2",
//   "imagen2.jpg"
// );
// repositorio.addActivity(
//   "Actividad 3",
//   "Descripción de la actividad 3",
//   "imagen3.jpg"
// );

// console.log(repositorio.getAllActivities());
// console.log(repositorio.deleteActivity(1));

//Homework #3

//Seleccionar el input de titulo
const title = document.getElementById("title");
//Seleccionar el input de description
const description = document.getElementById("description");
//Seleccionar el input de url de imagen
const imgUrl = document.getElementById("imgUrl");
//Seleccionar el botón
const btnAdd = document.getElementById("btn-add");

//Seleccionar el contenedor de tarjetas
const containerCards = document.getElementsByClassName(
  "container-cards-activities"
);

//handler

//creacion HTML
const createActivity = ({ id, title, description, imgUrl }) => {
  //creamos el titulo
  const htmlTitle = document.createElement("h3");
  htmlTitle.innerHTML = title;
  htmlTitle.className = "title_class";

  //creamos la descripción
  const htmlDescription = document.createElement("p");
  htmlDescription.innerHTML = description;
  htmlDescription.className = "description_class";

  //creamos la imagen
  const htmlImg = document.createElement("img");
  htmlImg.src = imgUrl;
  htmlImg.className = "img_class";

  //creamos el div que contiene todo
  const htmlContainer = document.createElement("div");
  htmlContainer.className = "container_class";
  htmlContainer.appendChild(htmlTitle);
  htmlContainer.appendChild(htmlDescription);
  htmlContainer.appendChild(htmlImg);

  return htmlContainer;
};

btnAdd.addEventListener("click", () => {
  // Ejemplo de uso de la función createActivity
  const activity = createActivity({
    title: "Título de la actividad",
    description: "Descripción de la actividad",
    imgUrl: "ruta/de/la/imagen.jpg",
  });

  // Agregar la actividad al DOM
  if (activity) {
    document.body.appendChild(activity); // Puedes cambiar document.body por el elemento donde quieras agregar la actividad
  }
});

//  - tome los valores de los inputs
//  - chekear que los valores tengan algo ("")... si algun input le falta info... retornar un alert
//  - repository .addActivity(title, description. imgUrl)

//  - convertir todos los objetos activity a tarjetas de html
//  - appendear todas las tarjetas al contenedor de tarjetas
