import { Router } from 'express';
import { MaterialController } from '../controllers/MaterialController';
import garantirAutenticacao from '../../shared/middlewares/garantirAutenticacao';

const materialRouter = Router();

const materialController = new MaterialController()

// materialRouter.use(garantirAutenticacao)

materialRouter.get('/todos', materialController.buscarTodos);

materialRouter.post('/', materialController.criar);

materialRouter.patch('/:id', materialController.editar);

materialRouter.delete('/:id', materialController.deletar);

materialRouter.get('/:id', materialController.buscar);

export default materialRouter;