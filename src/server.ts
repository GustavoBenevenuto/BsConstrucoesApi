import dotenv from 'dotenv';
import 'reflect-metadata'; // Usa por causa dos decorators
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import routes from './routes';
import './database';
import AppError from './errors/AppError';
import cors from 'cors';
import { ZodError } from 'zod';

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use((erro: AppError | ZodError, request: Request, response: Response, next: NextFunction) => {
    // Quer dizer que o erro foi originado pelo AppError, então é um erro que já conhecemos
    if (erro instanceof AppError) {
        return response.status(erro.statusCode).json({
            status: 'Erro',
            message: erro.mensagem,
        });
    }

    // O corpo da requisição está incorreto
    if (erro instanceof ZodError) {
        return response.status(400).send({ mensagem: 'Erro de validação: O corpo da requisição está incorreto', issues: erro.format() })
    }

    // A partir daqui é um erro desconhecido, que será necessário o uso do console para poder identificar
    console.error('💣💣 ERRO 💣💣');
    console.error(erro);

    return response.status(500).json({
        status: 'Erro',
        message: 'Erro interno no serviror',
    })
});

app.listen(process.env.PORT || 3333, () => {
    if (process.env.ENVIRONMENT == 'desenvolvimento') {
        console.log(' ');
        console.log(' ---------------------------- ');
        console.log('| Servidor rodando...        |');
        console.log('| http://localhost:3333/     |');
        console.log(' ---------------------------- ');
        console.log(process.env.DATABASE_URL, "\n",
            process.env.FOLDER_ENTITIES_ORM, "\n",
            process.env.FOLDER_MIGRATIONS_ORM, "\n",
            process.env.FILE_EXTENSION, "\n",
            process.env.ENVIRONMENT, "\n",
            process.env.PORT)
        console.log(' ');
    } else {
        console.log(' ');
        console.log(' ---------------------------- ');
        console.log('| Servidor rodando...        |');
        console.log(' ---------------------------- ');
        console.log(' ');
        console.log(process.env.DATABASE_URL, "\n",
            process.env.FOLDER_ENTITIES_ORM, "\n",
            process.env.FOLDER_MIGRATIONS_ORM, "\n",
            process.env.FILE_EXTENSION, "\n",
            process.env.ENVIRONMENT, "\n",
            process.env.PORT)
    }
});