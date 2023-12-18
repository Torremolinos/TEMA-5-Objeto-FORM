/**
 * @author Adrian I.
 * @github 
 */

// Método 1 : acceder a los elementos del documento

const formulario = document.getElementById('contactar');

// Método 2 : acceder a los elementos del documento
// Que es getElementsByName?
// Es un selector que permite seleccionar un elemento del DOM por su nombre de etiqueta html 
//formularios es un array de formularios, por eso se pone [0] para acceder al primer formulario. (porque al crearlo con getelements se convierte en array.)
const formularios = document.getElementsByTagName('form'); //ponemos aqui form porque queremos que busque por el nombre de la etiqueta html con el nombre form. si fuera div pos div etc..
const primerFormulario = formularios[0];
//todos los forms se almacenan dentro del documento form, que se acumulan en un array.

const segundoFormulario = formularios[1];
//que nodos tiene un formulario?
//un formulario tiene nodos de tipo input, textarea, button,labe, etc.
//que nodos tiene un input?
//un input tiene nodos de tipo text, password, email, etc.
//como accedo a los nodos de un input?
//con el atributo name del input y el metodo getElementsByName del documento 

//Otra posibilidad interesante que te permite el metodo anterir, es la de buscar con un elmeento padre por ejemplo:

// const menu = document.getElementById('menulateral'); //aqui accedemos al div que es el padre de los elementos que queremos buscar. (recuerda que menulateral es el id del div por eso se llama asi.)

// const formulariosMenuLateral = menu.getElementsByTagName('form'); //aqui accedemos a los formularios que estan dentro del div menulateral. (recuerda que form es el nombre de la etiqueta html por eso se llama asi.)

// const primerFormularioMenuLateral = formulariosMenuLateral[0]; //aqui accedemos al primer formulario que esta dentro del div menulateral. (recuerda que form es el nombre de la etiqueta html por eso se llama asi.)

// const segundoFormularioMenuLateral = formulariosMenuLateral[1]; //aqui accedemos al segundo formulario que esta dentro del div menulateral. (recuerda que form es el nombre de la etiqueta html por eso se llama asi.)


// La referencia a todos los formularios del documento

const misFormularios = document.forms; //aqui accedemos a todos los formularios del documento. (recuerda que forms es el nombre de la etiqueta html por eso se llama asi.)
const miPrimerFormulario1 = misFormularios[0]; //aqui accedemos al primer formulario del documento. (recuerda que forms es el nombre de la etiqueta html por eso se llama asi.)
const otroPrimerFormulario1 = document.form[0]; //aqui accedemos al segundo formulario del documento. (recuerda que forms es el nombre de la etiqueta html por eso se llama asi.)
const otroPrimerFormulario2 = misFormularios["contactar"]; //aqui accedemos al tercer formulario del documento. (recuerda que forms es el nombre de la etiqueta html por eso se llama asi.)
