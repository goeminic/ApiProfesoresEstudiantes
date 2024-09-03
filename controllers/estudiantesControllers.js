const db = require('../database/conexion.js');

class EstudiantesController {
    constructor() {

    }

    consultar(req,res) {
        try{
            db.query(`SELECT * FROM estudiantes`,
                (err, rows) => {
                    if (err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows);
                });
        } catch(err){
            res.status(500).send(err.message);
        } /*db.query = esta instruccion manda entre parentesis por un lado la consulta sql propiamente dicha y una funcion flecha la cual va a retornar dos valores posibles (error o rows que serian las tuplas correspondientes al resultado de la consulta realizada)*/
    }

    consultarDetalle(req,res) { 
        const { id } = req.params;
        try{
            db.query(`SELECT * FROM estudiantes WHERE id = ?`, [id],
                (err,rows) => {
                    if (err){
                        res.status(400).send(err);
                    }
                    res.status(200).json(rows[0]);
                });
        }catch(err){
            res.status(500).send(err.message);
        }
    }

    ingresar(req,res) {
        try{
            const {dni, nombre, apellido, email} = req.body;  /* En esta linea se realiza una desestructuracion del contenido que envia req.body para poder obtener los datos cargados por el usuario alli mismo y luego poder utilizarlos en la insercion*/
            db.query(`INSERT INTO estudiantes
                        (id, dni, nombre, apellido, email)
                        VALUES(NULL, ?, ?, ?, ?);`,
                [dni, nombre, apellido, email],(err, rows) => {
                    if (err){
                        res.status(400).send(err);
                }
                res.status(201).json({ id: rows.insertId });
                });
        } catch(err) {
            res.status(500).send(err.message);
        }
    }
    /*quede en 1:08:00*/
    actualizar(req,res) {
        res.json({msg:'Actualizacion de estudiante desde clase'});
    }

    borrar(req,res) {
        res.json({msg:'Eliminacion de estudiante desde clase'});
    }
    
}



module.exports = new EstudiantesController();   