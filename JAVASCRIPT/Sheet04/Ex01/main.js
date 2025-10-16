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