import { Router } from 'express';
import usuarioRouter from '../modules/usuario/routes/usuarioRouter.routes';
import materialRouter from '../modules/material/routes/materialRouter.routes';

const routes = Router();

routes.use('/usuario', usuarioRouter);

routes.use('/material', materialRouter);

routes.use('/', (request, response) => {
    return response.json({ 'Rotas': '/usuario; /material' });
});

export default routes;