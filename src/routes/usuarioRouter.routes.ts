import { Router } from 'express';
import AppError from '../errors/AppError';
import { z } from "zod";

const usuarioRouter = Router();

usuarioRouter.post('/', async (request, response) => {
    const usuarioCorpoSchema = z.object({
        nome: z.string().min(6),
        email: z.string().email(),
        senha: z.string().min(6),
    })

    const { nome, email, senha } = usuarioCorpoSchema.parse(request.body)

    // if (tipo_usuario == undefined && mensagem == undefined && avaliacao == undefined && id_questao == undefined)
    //     throw new AppError('O corpo da requisição está incorreto.', 400);

    // const usuario = { tipo_usuario, mensagem, avaliacao, id_questao };

    // const usuarioService = new usuarioService();

    // const resultado = await usuarioService.execute(usuario);

    return response.json({ 'criado': 'criado' });
});

export default usuarioRouter;