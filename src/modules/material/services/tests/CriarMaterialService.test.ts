import { expect, describe, it, beforeEach } from 'vitest'
import { compare } from 'bcryptjs'
import { EmMemoriaMaterialRepository } from '../../repositories/emMemoria/EmMemoriaMaterialRepository'
import { CriarMaterialService } from '../CriarMaterialService'

let emMemoriaMaterialRepository: EmMemoriaMaterialRepository
let criarMaterialService: CriarMaterialService

describe('Serviço: CriarMaterial', () => {

    beforeEach(() => {
        emMemoriaMaterialRepository = new EmMemoriaMaterialRepository()
        criarMaterialService = new CriarMaterialService(emMemoriaMaterialRepository)
    });

    it('Deve ser possível cadastrar um material', async () => {
        const { material } = await criarMaterialService.execute({
            nome: 'Martelo',
            descricao: 'Martelo de cosntrução',
            preco: 12,
            atributos: [
                { cahve: 'Cabo', valor: 'Aço', },
                { cahve: 'Peso', valor: '3.5 KG', },
            ],
        })

        expect(material.id).toBeTruthy()
    })
})