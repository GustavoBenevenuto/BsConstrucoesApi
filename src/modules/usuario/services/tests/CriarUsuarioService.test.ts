import { expect, describe, it, beforeEach } from 'vitest'
import { compare } from 'bcryptjs'
import { EmMemoriaUsuarioRepository } from '../../repositories/emMemoria/EmMemoriaUsuarioRepository'
import { CriarUsuarioService } from '../CriarUsuarioService'
import { UsuarioJaExisteErro } from '../../errors/UsuarioJaExisteErro'

let emMemoriaUsuarioRepository: EmMemoriaUsuarioRepository
let criarUsuarioService: CriarUsuarioService

describe('Serviço: CriarUsuario', () => {

    beforeEach(() => {
        emMemoriaUsuarioRepository = new EmMemoriaUsuarioRepository()
        criarUsuarioService = new CriarUsuarioService(emMemoriaUsuarioRepository)
    });

    it('Deve ser possível cadastrar um usuário', async () => {
        const { usuario } = await criarUsuarioService.execute({
            nome: 'Gusta',
            email: 'gusta@gmail.com',
            senha: '123456'
        })

        expect(usuario.id).toBeTruthy()
    })

    it('A senha do usuário deve ser um hash após realizar o cadastro na aplicação', async () => {
        const { usuario } = await criarUsuarioService.execute({
            nome: 'Gusta',
            email: 'gusta@gmail.com',
            senha: '123456'
        })

        const senhaEstaComoHash = await compare('123456', usuario.hash_senha)

        expect(senhaEstaComoHash).toBeTruthy()
    })

    it('Não pode cadastrar com e-mails já existente', async () => {
        const email = 'gusta@gmail.com'

        const { usuario } = await criarUsuarioService.execute({
            nome: 'Gusta',
            email,
            senha: '123456'
        })

        expect(async () => {
            return await criarUsuarioService.execute({
                nome: 'Debs',
                email,
                senha: '548748'
            })
        }).rejects.toBeInstanceOf(UsuarioJaExisteErro)
    })
})