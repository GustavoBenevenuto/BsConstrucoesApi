import { expect, describe, it, beforeEach } from 'vitest'
import { compare } from 'bcryptjs'
import { EmMemoriaMaterialRepository } from '../../repositories/emMemoria/EmMemoriaMaterialRepository'
import { CriarMaterialService } from '../CriarMaterialService'
import { EmMemoriaInformacaoInformacaoMaterialRepository } from '../../repositories/emMemoria/EmMemoriaInformacaoMaterialRepository'

let emMemoriaMaterialRepository: EmMemoriaMaterialRepository
let emMemoriaInformacaoInformacaoMaterialRepository: EmMemoriaInformacaoInformacaoMaterialRepository
let criarMaterialService: CriarMaterialService

describe('Serviço: CriarMaterial', () => {

    beforeEach(() => {
        emMemoriaMaterialRepository = new EmMemoriaMaterialRepository()
        emMemoriaInformacaoInformacaoMaterialRepository = new EmMemoriaInformacaoInformacaoMaterialRepository()
        criarMaterialService = new CriarMaterialService(emMemoriaMaterialRepository, emMemoriaInformacaoInformacaoMaterialRepository)
    });

    it('Deve ser possível cadastrar um material', async () => {
        const { material } = await criarMaterialService.execute({
            nome: 'Martelo',
            descricao: 'Martelo de cosntrução',
            atributos: [
                { cahve: 'Cabo', valor: 'Aço', },
                { cahve: 'Peso', valor: '3.5 KG', },
            ],
            informacaoMaterial: {
                preco: 45,
                quantidade: 200,
            }
        })

        expect(material.id).toBeTruthy()
    })
})