const mysql = require('mysql2');  /* recordar configurar variables de entorno para manejar sql desde linea de comandos | tambien recordar tener configurado xampp (fundamental tener instalado xampp y activo apache y mysql antes de ejecutar la API) o dbeaver para testeo | recordar que en windows utiliza mariadb para mysql*/

const db = mysql.createConnection(
    {
        host: '127.0.0.1', /*utiliza el puerto 3306 en local host segun configuracion de dbeaver*/
        user: 'root',
        password: '',
        database: 'cursos',
    }
);

db.connect((err) => {
    if (err){
        throw err;
    }
    console.log('Base de datos conectada');
});


/* quede en 53 */

module.exports = db;