const db = require('../database/conexion.js');


class CursosController {
    constructor(){

    }

    consultar(req,res) {
        res.json({msg:'Consulta de cursos desde clase'});
    }

    consultarDetalle(req,res) {
        const { id } = req.params;
        res.json({msg:`Consulta de curso con detalle bajo id ${id}`});
    }   

    ingresar(req,res) {
        res.json({msg:'Ingreso de un curso con clases'});
    }

    actualizar(req,res) {
        res.json({msg:'Modificacion de un curso con clases'});
    }

    borrar(req,res) {
        res.json({msg:'Borrado de curso con clase'});
    }

}

module.exports = new CursosController();
