class EstudiantesController {
    constructor() {

    }

    consultar(req,res) {
        res.json({msg:'Consulta Estudiantes desde Clase'});
    }

    consultarDetalle(req,res) {
        const { id } = req.params; 
        res.json({msg:`Consulta detalle estudiante desde Clase con id ${id}`}); 
    }

    ingresar(req,res) {
        res.json({msg:'Ingreso de estudiante desde clase'});
    }

    actualizar(req,res) {
        res.json({msg:'Actualizacion de estudiante desde clase'});
    }

    borrar(req,res) {
        res.json({msg:'Eliminacion de estudiante desde clase'});
    }
    
}

/*quede en 36*/

module.exports = new EstudiantesController();   