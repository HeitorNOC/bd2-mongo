import { Request, Response } from "express"
import { LivroRepository } from "../repositories/LivroRepository"
import { ObjectId } from "mongodb"

export class LivroController {
    private livroRepository: LivroRepository

    constructor() {
        this.livroRepository = new LivroRepository()
    }

    async getAllLivros(req: Request, res: Response): Promise<void> {
        try {
            const livros = await this.livroRepository.getAllLivros()
            res.status(200).json({ livros })
        } catch(error:any) {
            res.status(400).json({ error: error.message })
        }
    }

    async getLivroById(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const objId = new ObjectId(id)
        try {
            const livro = await this.livroRepository.getLivroById(objId)
            res.status(200).json({ livro })
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

}