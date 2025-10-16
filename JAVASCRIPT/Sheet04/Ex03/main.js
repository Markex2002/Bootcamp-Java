let sectionTareas = document.getElementById("tareas");


//Creamos y insertamos el H2
let h2 = document.createElement("h2");
h2.textContent = "Mis Tareas: ";
sectionTareas.append(h2);
//Creamos y insertamos el Ul
let ul = document.createElement("ul");
sectionTareas.append(ul);
//Creamos el li y lo insertamos
let li1 = document.createElement("li");
li1.classList.add("tarea");
li1.textContent = "Aprender JavaScript";
ul.append(li1);
//Creamos otro li y volvemos a insertar
let li2 = document.createElement("li");
li2.classList.add("tarea");
li2.textContent = "Practicar DOM";
ul.append(li2)

//Creamos y insertamos el Span
let span = document.createElement("span");
span.textContent = 0;
h2.append(span);

//FUNCION QUE NOS SIRVE PARA CONTAR LAS TAREAS
function contarTareas() {
  const total = ul.children.length;
  span.textContent = `(${total})`;
}
contarTareas();


//----EX02----//
let buttonAgregar = document.querySelector("button");
buttonAgregar.addEventListener("click", agregarTarea);

function agregarTarea(e) {
  e.preventDefault();
  const inputValue = document.querySelector('input').value;

  //Nos aseguramos de que el input no este vacio
  if (!inputValue) {
    console.log("El campo no puede estar vacio");
    return;
  };

  let liInput = document.createElement("li");
  liInput.classList.add("tarea");
  liInput.textContent = inputValue;



  //----EX03----//
  //AÑADIMOS BOTONES
  let buttonCompletar = document.createElement("button");
  let buttonEliminar = document.createElement("button");
  buttonCompletar.classList.add("completar");
  buttonEliminar.classList.add("eliminar");
  buttonCompletar.textContent = "Completar";
  buttonEliminar.textContent = "Eliminar";
  liInput.append(buttonCompletar);
  liInput.append(buttonEliminar);

  ul.append(liInput);
}





