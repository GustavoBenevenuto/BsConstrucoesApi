import { Router } from 'express';
import usuarioRouter from '../modules/usuario/routes/usuarioRouter.routes';

const routes = Router();

routes.use('/usuario', usuarioRouter);

routes.use('/', (request, response) => {
    return response.json({ 'Rotas': '/usuario' });
});

export default routes;