import express from 'express';


// 1 - Configurar un puerto
const app = express();

app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port'), ()=>{
    console.log ('Estoy en el puerto '+ app.get('port'))
})

// 2 - Configurar middlewares

// 3 - Configurar las rutas
