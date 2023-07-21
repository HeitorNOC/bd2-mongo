import { Router } from "express"
import { LivroController } from "../controllers/LivroController"
import { AutorController } from "../controllers/AutorController"
import { CategoriaController } from "../controllers/CategoriaController"

const router = Router()
const livroController = new LivroController()
router.get("/livros", livroController.getAllLivros.bind(livroController))
router.get("/livro", livroController.getLivroById.bind(livroController))
router.post("/livro", livroController.createLivro.bind(livroController))
router.patch("/livro", livroController.updateLivro.bind(livroController))
router.delete("/livro", livroController.deleteLivro.bind(livroController))

const autorController = new AutorController()
router.get("/autores", autorController.getAllAutor.bind(autorController))
router.get("/autor", autorController.getAutorById.bind(autorController))
router.post("/autor", autorController.createAutor.bind(autorController))
router.patch("/autor", autorController.updateAutor.bind(autorController))
router.delete("/autor", autorController.deleteAutor.bind(autorController))


const categoriaController = new CategoriaController()
router.get("/categorias", categoriaController.getAllCategoria.bind(categoriaController))
router.get("/categoria", categoriaController.getCategoriaById.bind(categoriaController))
router.post("/categoria", categoriaController.createCategoria.bind(categoriaController))
router.patch("/categoria", categoriaController.updateCategoria.bind(categoriaController))
router.delete("/categoria", categoriaController.updateCategoria.bind(categoriaController))


export { router }
