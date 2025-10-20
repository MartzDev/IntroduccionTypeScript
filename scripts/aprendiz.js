export var NivelAcademico;
(function (NivelAcademico) {
    NivelAcademico["BACHILLERATO"] = "Bachillerato";
    NivelAcademico["UNIVERSITARIO"] = "Universitario";
    NivelAcademico["POSTGRADO"] = "Postgrado";
})(NivelAcademico || (NivelAcademico = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(avatar, nombre, apellido, edad, nivelEducativo, cursos) {
        this.avatar = avatar;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var totalCursoCertificados = 0;
        for (var index = 0; index < this.cursos.length; index++) {
            var curso = this.cursos[index];
            if (curso.certificacion) {
                totalCursoCertificados++;
            }
        }
        return totalCursoCertificados;
    };
    return Aprendiz;
}());
export { Aprendiz };
