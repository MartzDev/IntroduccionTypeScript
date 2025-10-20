import { Aprendiz, NivelAcademico } from "./aprendiz.js";
import { Curso } from "./curso.js";
var aprendizTable = document.getElementById("aprendiz");
var estadisticasTable = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = function () {
    var texto = textoBusqueda.value;
    texto = (texto == null) ? "" : texto;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var curssFiltrados = aprendiz1.cursos.filter(function (curso) { return curso.nombre.match(texto); });
    mostrarCursosAprendiz(curssFiltrados);
};
var cursos = [
    new Curso("TypeScript", 20, 95, true, 2023),
    new Curso("JavaScript", 30, 85, true, 2022),
    new Curso("Angular", 25, 90, false, 2023),
    new Curso("React", 15, 55, false, 2021),
    new Curso("Node.js", 40, 75, true, 2022)
];
export var aprendiz1 = new Aprendiz("./tomioka-giyu.jpg", "Martz", "Dev", 18, NivelAcademico.POSTGRADO, cursos);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td><img src=\"".concat(aprendiz.avatar, "\" height=\"100\"></td></tr>\n        <tr><td>Nombre: ").concat(aprendiz.nombre, "</td></tr>\n        <tr><td>Apellido: ").concat(aprendiz.apellido, "</td></tr>\n        <tr><td>Edad: ").concat(aprendiz.edad, "</td></tr>\n        <tr><td>Nivel academico: ").concat(aprendiz.nivelEducativo, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(aprendiz) {
    var totalCursosCertificados = aprendiz.darCursosCertificados();
    var tbodyEstadisticas = document.createElement("tbody");
    tbodyEstadisticas.innerHTML = "<tr><td>Total de cursos certificados: ".concat(totalCursosCertificados, "</td></tr>");
    estadisticasTable.appendChild(tbodyEstadisticas);
}
function mostrarCursosAprendiz(cursos) {
    var tbodyCursos = document.createElement("tbody");
    var estado = cursos.map(function (curso) { return (curso.calificacion > 60) ? 'green' : 'red'; });
    var index = 0;
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trCurso = document.createElement("tr");
        trCurso.innerHTML = "<td>".concat(curso.nombre, "</td>\n            <td>").concat(curso.horas, " horas</td>\n            <td style=\"color: ").concat(estado[index], " \">").concat(curso.calificacion, "</td>\n            <td>").concat(curso.certificacion, "</td>\n            <td>").concat(curso.anio, "</td>");
        tbodyCursos.appendChild(trCurso);
        index++;
    }
    cursosTable.appendChild(tbodyCursos);
}
mostrarDatosAprendiz(aprendiz1);
mostrarEstadisticas(aprendiz1);
mostrarCursosAprendiz(aprendiz1.cursos);
console.table(aprendiz1);
