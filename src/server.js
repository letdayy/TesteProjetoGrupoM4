// const em tudo que for utilizar
import express from 'express';
const app = express();
const port = 3000;

app.use(json());

// importar controllers
import EmpregadoController from './controllers/EmpregadoController.js';


// chamar as rotas
app.use('/empregados'), EmpregadoController;

app.listen(port, () => {
    console.log(`Servidor funcionando na porta ${port}`);
})

