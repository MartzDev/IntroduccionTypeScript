import { Curso } from "./curso.js"

export enum NivelAcademico {
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSTGRADO = "Postgrado"
}

export class Aprendiz {

    constructor(public avatar: string, public nombre: string, public apellido: string,
        public edad: number, public nivelEducativo: NivelAcademico, public cursos: Curso[]) { }


    public darCursosCertificados(): number {
        let totalCursoCertificados: number = 0;

        for (let index = 0; index < this.cursos.length; index++) {
            let curso = this.cursos[index]
            if (curso.certificacion) {
                totalCursoCertificados++
            }
        }
        return totalCursoCertificados
    }
}