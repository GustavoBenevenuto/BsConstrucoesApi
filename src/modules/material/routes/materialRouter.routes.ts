import { Router } from 'express';
import AppError from '../../../errors/AppError';
import { z } from "zod";

const materialRouter = Router();

materialRouter.post('/', async (request, response) => {
    return response.json({});
});

materialRouter.patch('/:id', async (request, response) => {

    return response.json({});
});

export default materialRouter;