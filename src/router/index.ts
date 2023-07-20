import { Router } from "express"
import { LivroController } from "../controllers/LivroController"

const router = Router()
const livroController = new LivroController()

router.get("/livros", livroController.getAllUsers.bind(livroController))

export { router }
