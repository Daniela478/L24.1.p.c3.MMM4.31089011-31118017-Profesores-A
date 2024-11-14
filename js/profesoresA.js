/*PROFESORES-A
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
- Función: profesoresCategoria.
- Parámetros: profesores (array de objetos profesor), categoria (un número).
- Retorno: array de objetos profesor que pertenecen a la categoría indicada
*/


let profesores = [
    { categoría: 9, nombre: 'Lola', sexo: 'F' },
    { categoría: 2, nombre: 'Patricia', sexo: 'F' },
    { categoría: 2, nombre: 'Eva', sexo: 'F' },
    { categoría: 2, nombre: 'Ricardo', sexo: 'M' },
    { categoría: 7, nombre: 'Lalo', sexo: 'M' },
    { categoría: 5, nombre: 'Leopoldo', sexo: 'M' },
    { categoría: 1, nombre: 'Juan', sexo: 'M' },
];

let profesoresCategoria = (profesores, cat) => {
    let profesfilt = [];
    for (let i = 0; i < profesores.length; i++) {
        if (profesores[i].categoría === cat) {profesfilt.push(profesores[i]);}
    }
    return profesfilt;
};

let salida = document.getElementById("salida");
let profesoresDeCategoria = profesoresCategoria(profesores, 2);

salida.innerHTML = `Profesores Categoría "2":<br>`;
profesoresDeCategoria.forEach((profesor) => {
    salida.innerHTML += `Nombre del profesor: ${profesor.nombre} -- Sexo del profesor: ${profesor.sexo}<br>`;
});