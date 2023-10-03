import { expect, describe, it, beforeEach } from 'vitest'
import { EmMemoriaUsuarioRepository } from '../../repositories/emMemoria/EmMemoriaUsuarioRepository'
import { EditarUsuarioService } from '../EditarUsuarioService'
import { UsuarioNaoEncontradoErro } from '../../errors/UsuarioNaoEncontradoErro'

let emMemoriaUsuarioRepository: EmMemoriaUsuarioRepository
let editarUsuarioService: EditarUsuarioService

describe('Serviço: CriarUsuario', () => {

    beforeEach(() => {
        emMemoriaUsuarioRepository = new EmMemoriaUsuarioRepository()
        editarUsuarioService = new EditarUsuarioService(emMemoriaUsuarioRepository)
    });

    it('Deve ser possível editar um usuário', async () => {

        const usuarioCriadoTeste = await emMemoriaUsuarioRepository.create({
            email: 'gsutavo@gmail.com',
            nome: 'Gustavo',
            senha: '123456'
        })

        const usuarioTeste = await emMemoriaUsuarioRepository.save(usuarioCriadoTeste)

        const { usuario } = await editarUsuarioService.execute({
            nome: 'Gusta',
            id: usuarioTeste.id
        })

        expect(usuario.nome).toBe('Gusta')
    })

    it('Deve dar erro ao editar um usuário inexistente', async () => {
        expect(async () => {
            return await editarUsuarioService.execute({
                nome: 'Gusta',
                id: 'sadw-uiid-dee'
            })
        }).rejects.toBeInstanceOf(UsuarioNaoEncontradoErro)
    })
})