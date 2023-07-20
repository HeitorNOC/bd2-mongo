import { Request, Response } from "express"
import { LivroRepository } from "../repositories/LivroRepository"

export class LivroController {
    private livroRepository: LivroRepository

    constructor() {
        this.livroRepository = new LivroRepository()
    }

    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.livroRepository.getAllLivros()
            res.status(200).json({ users })
        } catch(error:any) {
            res.status(400).json({ error: error.message })
        }
    }
}