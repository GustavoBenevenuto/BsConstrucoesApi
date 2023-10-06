import { Router } from 'express';
import garantirAutenticacao from '../../shared/middlewares/garantirAutenticacao';
import { InformacaoMaterialController } from '../controllers/InformacaoMaterialController';

const informacaoMaterialRouter = Router();

const informacaoMaterialController = new InformacaoMaterialController()

// informacaoMaterialRouter.use(garantirAutenticacao)

informacaoMaterialRouter.post('/', informacaoMaterialController.criar);

export default informacaoMaterialRouter;