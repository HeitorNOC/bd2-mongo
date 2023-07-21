import { Request, Response } from "express";
import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { ObjectId } from "mongodb";
import { validateFieldsCategoria } from "../validation/emptyFieldsValidation";

export class CategoriaController {
    private CategoriaRepository: CategoriaRepository;

    constructor() {
        this.CategoriaRepository= new CategoriaRepository()
    }


    async getAllCategoria(req: Request, res: Response): Promise<void> {
        try {
            const categoria = await this.CategoriaRepository.getAllCategoria();
            res.status(200).json(categoria)
        } catch(error:any) {
            res.status(400).json({ error: error.message })
        }
    }

    async getCategoriaById(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const objId = new ObjectId(id)
        try {
            const categoria = await this.CategoriaRepository.getCategoriaById(objId);
            res.status(200).json(categoria)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async createCategoria(req: Request, res: Response): Promise<void> {
        const { nome } =  req.body
        const validate = validateFieldsCategoria({nome})

        if (validate != "") {
            throw new Error(`Field ${validate} is invalid`)
        }

        try {
            const categoria = await this.CategoriaRepository.createCategoria({ nome})
            res.status(201).json(categoria)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async updateCategoria(req: Request, res: Response): Promise<void> {
        const {id, nome} =  req.body
        const objId = new ObjectId(id)
        const validate = validateFieldsCategoria({nome})

        if (validate != "") {
            throw new Error(`Field ${validate} is invalid`)
        }

        try {
            const categoria = await this.CategoriaRepository.updateCategoria(objId,{ nome})
            res.status(201).json(categoria)
        } catch(error: any) {
            res.status(400).json({ error: error.message })
        }
    }

    async deleteLivro(req: Request, res: Response): Promise<void> {
        const { id } = req.body
        const objId = new ObjectId(id)

        try {
            const categoria = await this.CategoriaRepository.deleteLivro(objId)
            res.status(204).json(categoria)
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
}