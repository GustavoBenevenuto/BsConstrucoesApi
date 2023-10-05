import { Router } from 'express';
import AutenticarController from '../controllers/AutenticarController';

const autenticarRouter = Router();

const autenticarController = new AutenticarController();

autenticarRouter.post('/', autenticarController.create);

export default autenticarRouter;