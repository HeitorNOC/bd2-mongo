import { Router } from "express"
import { LivroController } from "../controllers/LivroController"

const router = Router()
const livroController = new LivroController()

router.get("/livros", livroController.getAllLivros.bind(livroController))
router.get("/livro", livroController.getLivroById.bind(livroController))

export { router }
