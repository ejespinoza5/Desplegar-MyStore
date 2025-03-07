const express = require('express'); // Importar express
const cors = require('cors'); // Importar cors
const routerApi = require('./routes'); // Importar las rutas
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express(); 
const port = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());


app.use(express.json());

// Rutas de prueba
app.get('/', (req, res) => {
  res.send('Hola servidor de express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Rutas de la API
routerApi(app);

// Manejo de errores
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
