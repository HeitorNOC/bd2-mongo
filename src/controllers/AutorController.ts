import { Request, Response } from "express";
import { AutorRepository } from "../repositories/AutorRepository";
import { ObjectId } from "mongodb";
import { validateFieldsAutor } from "../validation/emptyFieldsValidation";

export class AutorController {
    private AutorRepository: AutorRepository;

    constructor() {
        this.AutorRepository= new AutorRepository()
    }

    async getAllAutor(req: Request, res: Response): Promise<void> {
        try {
            const autores = await this.AutorRepository.getAllAutor();
            res.status(200).json(autores)
        } catch(error:any) {
            res.status(400).json({ error: error.message })
        }
    }

    async getAutorById(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const objId = new ObjectId(id)
        try {
            const autor = await this.AutorRepository.getAutorById(objId);
            res.status(200).json(autor)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async createAutor(req: Request, res: Response): Promise<void> {
        const { nome,nacionalidade,descricao } =  req.body
        const validate = validateFieldsAutor({nome,nacionalidade,descricao})
        if (validate != "") {
            throw new Error(`Field ${validate} is invalid`)
        }
        try {
            const autor = await this.AutorRepository.createAutor({nome,nacionalidade,descricao})
            res.status(201).json(autor)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async updateAutor(req: Request, res: Response): Promise<void> {
        const {id, nome,nacionalidade,descricao} =  req.body
        const objId = new ObjectId(id)
        const validate = validateFieldsAutor({nome,nacionalidade,descricao})

        if (validate != "") {
            throw new Error(`Field ${validate} is invalid`)
        }

        try {
            const autor = await this.AutorRepository.updateAutor(objId,{nome,nacionalidade,descricao})
            res.status(201).json(autor)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async deleteAutor(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const objId = new ObjectId(id)

        try {
            const autor = await this.AutorRepository.deleteAutor(objId)
            res.status(204).json(autor)
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }


}