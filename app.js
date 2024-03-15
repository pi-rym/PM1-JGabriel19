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
class Repositorio {
  constructor() {
    this.activities = [];
  }

  //Un metodo que reciba datos de una actividad, cree una actividad y la guarde en su array
  addActivity(id, title, description, imgUrl) {
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }

  //Un metodo que le permite retornar todas las actividades
  getAllActivities() {
    return this.activities;
  }

  //Eliminar actividades deleteActivity
  deleteActivity(id) {}
  //Un metodo que le permita filtrar las actividades
  filtarActividades(id) {
    return this.activities.filter((activity) => activity.id === id);
  }
}

const repositorio = new Repositorio();
repositorio.addActivity(
  1,
  "Actividad 1",
  "Descripción de la actividad 1",
  "imagen1.jpg"
);
repositorio.addActivity(
  2,
  "Actividad 2",
  "Descripción de la actividad 2",
  "imagen2.jpg"
);

console.log(repositorio.getAllActivities());
console.log(repositorio.filtarActividades(1));
