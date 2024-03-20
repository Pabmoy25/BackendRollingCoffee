import express from 'express';
import 'dotenv/config' //permite procesar variables de entorno
import cors from 'cors'
import morgan from 'morgan';

// 1 - Configurar un puerto
const app = express();

app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port'), ()=>{
    console.log ('Estoy en el puerto '+ app.get('port'))
})

// 2 - Configurar middlewares
app.use(cors()); //permite obtener conexiones remotas
app.use (morgan('dev')); // nos da info extra en la terminal

//todo: agregar el resto de middlewares


// 3 - Configurar las rutas
//http://localhost:4001/productos
app.get('/', (req, res)=>{
    //agregar toda la logica
console.log('procesando una solicitud get');
res.send('Respuesta del backend rollingcoffe')

})