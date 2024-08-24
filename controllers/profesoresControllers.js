class ProfesoresController {
    constructor() {

    }
    
    consultar(req,res) {
        res.json({msg:'Consulta de Profesor desde clase'});
    }

    consultarDetalle(req,res) {
        res.json({msg:'Consultar detalle de Profesor desde clase'});
    }

    ingresar(req,res) {
        res.json({msg:'Ingreso de Profesor desde clase'});
    }

    actualizar(req,res) {
        res.json({msg:'Actualizar un Profesor desde clase'});
    }

    borrar(req,res) {
        res.json({msg:'Borrar un Profesor desde clase'});
    }

}

module.exports = new ProfesoresController();