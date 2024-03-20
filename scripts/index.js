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
  createActivity(title, description, imgUrl) {
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
    const filtrados = this.activities.filter((activity) => activity.id !== id);
    return (this.activities = filtrados);
  }
}

const repository = new Repository();

//Homework #3

const btnAdd = document.getElementById("btn-add");
btnAdd.addEventListener("click", handlerSubmitClick);

function handlerSubmitClick(event) {
  event.preventDefault();

  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const imgUrl = document.getElementById("imgUrl");

  if (!title.value || !description.value || !imgUrl.value) {
    alert("mensaje de alerta");
    return;
  }

  repository.createActivity(title.value, description.value, imgUrl.value);

  title.value = "";
  description.value = "";
  imgUrl.value = "";

  addActivitiesToContainer();
}

function addActivitiesToContainer() {
  const containerCards = document.querySelector(".container-cards-activities");
  containerCards.innerHTML = "";
  const arrayCardsHtml = repository.getAllActivities().map(createHtml);
  arrayCardsHtml.forEach((cardHtml) => containerCards.appendChild(cardHtml));
}

//creacion HTML
function createHtml({ id, title, description, imgUrl }) {
  const htmlContainer = document.createElement("div");
  const htmlBox = document.createElement("div");
  const htmlIcon = document.createElement("i");
  const htmlTitle = document.createElement("h3");
  const htmlImg = document.createElement("img");
  const htmlDescription = document.createElement("p");

  htmlIcon.className = "bi bi-trash3-fill";
  htmlBox.className = "box-title-card";
  htmlContainer.className = "box-card";
  htmlTitle.innerHTML = title;
  htmlTitle.className = "title_card glass";
  htmlDescription.innerHTML = description;
  htmlDescription.className = "description_card";
  htmlImg.src = imgUrl;
  htmlImg.className = "img_card";

  //creamos el div que contiene todo
  htmlContainer.appendChild(htmlImg);
  htmlContainer.appendChild(htmlBox);
  htmlContainer.appendChild(htmlTitle);
  htmlContainer.appendChild(htmlIcon);
  htmlBox.appendChild(htmlTitle);
  htmlBox.appendChild(htmlIcon);
  htmlContainer.appendChild(htmlDescription);

  htmlIcon.addEventListener("click", () => borrarActividad(id));

  return htmlContainer;
}

function borrarActividad(id) {
  repository.deleteActivity(id);
  addActivitiesToContainer();
}
