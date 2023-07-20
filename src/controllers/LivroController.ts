import { Request, Response } from "express"
import { LivroRepository } from "../repositories/LivroRepository"
import { ObjectId } from "mongodb"
import { validateFields } from "../validation/emptyFieldsValidation"

export class LivroController {
    private livroRepository: LivroRepository

    constructor() {
        this.livroRepository = new LivroRepository()
    }

    async getAllLivros(req: Request, res: Response): Promise<void> {
        try {
            const livros = await this.livroRepository.getAllLivros()
            res.status(200).json( livros )
        } catch(error:any) {
            res.status(400).json({ error: error.message })
        }
    }

    async getLivroById(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const objId = new ObjectId(id)
        try {
            const livro = await this.livroRepository.getLivroById(objId)
            res.status(200).json( livro )
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async createLivro(req: Request, res: Response): Promise<void> {
        const { nome, autores, img_url, short_description, categorias, ano_lancamento } =  req.body

        const autoresObjectId: Array<ObjectId> = autores.map((autorId: string) => new ObjectId(autorId));

        const categoriasObjectId: Array<ObjectId> = categorias.map((categoriaId: string) => new ObjectId(categoriaId));


        const validate = validateFields({ nome, autoresObjectId, img_url, short_description, categoriasObjectId, ano_lancamento })

        if (validate != "") {
            throw new Error(`Field ${validate} is invalid`)
        }

        

        try {
            const livro = await this.livroRepository.createLivro({ nome, autoresObjectId, img_url, short_description, categoriasObjectId, ano_lancamento })
            res.status(201).json(livro)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

}