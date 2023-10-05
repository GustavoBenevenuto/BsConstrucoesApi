import { Router } from 'express';
import usuarioRouter from '../modules/usuario/routes/usuarioRouter.routes';
import materialRouter from '../modules/material/routes/materialRouter.routes';
import autenticacaoRouter from '../modules/usuario/routes/autenticar.routes';

const routes = Router();

routes.use('/usuario', usuarioRouter);

routes.use('/material', materialRouter);

routes.use('/autenticar', autenticacaoRouter);


routes.use('/', (request, response) => {
    return response.json({ 'Rotas': '/usuario; /material' });
});

export default routes;