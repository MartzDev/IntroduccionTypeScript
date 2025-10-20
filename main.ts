import { Aprendiz, NivelAcademico } from "./aprendiz.js"
import { Curso } from "./curso.js"

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!
let estadisticasTable: HTMLElement = document.getElementById("estadisticas")!
let cursosTable: HTMLElement = document.getElementById("cursos")!
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!
let textoBusqueda: HTMLInputElement = document.getElementById("texto-busqueda") as HTMLInputElement

btnFiltro.onclick = () => {
    let texto: string = textoBusqueda.value
    texto = (texto == null) ? "" : texto
    cursosTable.getElementsByTagName("tbody")[0].remove()
    let curssFiltrados: Curso[] = aprendiz1.cursos.filter(curso => curso.nombre.match(texto))
    mostrarCursosAprendiz(curssFiltrados)
}

let cursos: Curso[] = [
    new Curso("TypeScript", 20, 95, true, 2023),
    new Curso("JavaScript", 30, 85, true, 2022),
    new Curso("Angular", 25, 90, false, 2023),
    new Curso("React", 15, 55, false, 2021),
    new Curso("Node.js", 40, 75, true, 2022)
]

export const aprendiz1 = new Aprendiz("./tomioka-giyu.jpg", "Martz", "Dev", 18, NivelAcademico.POSTGRADO, cursos)

function mostrarDatosAprendiz(aprendiz: Aprendiz): void {
    let tbodyAprendiz: HTMLElement = document.createElement("tbody")

    tbodyAprendiz.innerHTML = `<tr><td><img src="${aprendiz.avatar}" height="100"></td></tr>
        <tr><td>Nombre: ${aprendiz.nombre}</td></tr>
        <tr><td>Apellido: ${aprendiz.apellido}</td></tr>
        <tr><td>Edad: ${aprendiz.edad}</td></tr>
        <tr><td>Nivel academico: ${aprendiz.nivelEducativo}</td></tr>`

    aprendizTable.appendChild(tbodyAprendiz)
}

function mostrarEstadisticas(aprendiz: Aprendiz): void {
    let totalCursosCertificados: number = aprendiz.darCursosCertificados()
    let tbodyEstadisticas: HTMLElement = document.createElement("tbody")

    tbodyEstadisticas.innerHTML = `<tr><td>Total de cursos certificados: ${totalCursosCertificados}</td></tr>`
    estadisticasTable.appendChild(tbodyEstadisticas)
}

function mostrarCursosAprendiz(cursos: Curso[]): void {
    let tbodyCursos: HTMLElement = document.createElement("tbody")
    let estado: string[] = cursos.map(curso => (curso.calificacion > 60) ? 'green' : 'red')
    let index: number = 0;

    for (const curso of cursos) {
        let trCurso: HTMLElement = document.createElement("tr")

        trCurso.innerHTML = `<td>${curso.nombre}</td>
            <td>${curso.horas} horas</td>
            <td style="color: ${estado[index]} ">${curso.calificacion}</td>
            <td>${curso.certificacion}</td>
            <td>${curso.anio}</td>`
        tbodyCursos.appendChild(trCurso)
        index++
    }
    cursosTable.appendChild(tbodyCursos)
}

mostrarDatosAprendiz(aprendiz1)
mostrarEstadisticas(aprendiz1)
mostrarCursosAprendiz(aprendiz1.cursos)

console.table(aprendiz1)