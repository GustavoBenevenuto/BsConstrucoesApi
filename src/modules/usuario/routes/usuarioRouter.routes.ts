import { Router } from 'express';
import { UsuarioController } from '../controllers/UsuarioController';

const usuarioRouter = Router();

const usuarioController = new UsuarioController();

usuarioRouter.post('/', usuarioController.criar);

usuarioRouter.patch('/:id', usuarioController.editar);

usuarioRouter.delete('/:id', usuarioController.deletar);

usuarioRouter.get('/:id', usuarioController.buscar);

export default usuarioRouter;