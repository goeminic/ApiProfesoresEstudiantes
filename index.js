const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');
const cursosRoutes = require('./routes/cursosRoutes.js');


app.use(express.json());
app.use(cors());
app.get('/' , (req,res) => {
    res.send('Hola Mundo');
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores",profesoresRoutes);
app.use("/cursos",cursosRoutes);


app.listen(6500, ()=>{
    console.log('Servidor Activo'); 
});

/* para actualizar 1 git commit -m "comentarios" 2 git add .*/