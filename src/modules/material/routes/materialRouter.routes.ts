import { Router } from 'express';
import { MaterialController } from '../controllers/MaterialController';

const materialRouter = Router();

const materialController = new MaterialController()

materialRouter.get('/todos', materialController.buscarTodos);

materialRouter.post('/', materialController.criar);

materialRouter.patch('/:id', materialController.editar);

materialRouter.delete('/:id', materialController.deletar);

materialRouter.get('/:id', materialController.buscar);

export default materialRouter;