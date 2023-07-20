import { ObjectId } from "mongodb"
import { EntityId } from "./entityId"



interface Livro extends EntityId {
    nome: string
    autor: string
    ano_lancamento: Number
    autores: Array<ObjectId>
    img_url: string
    short_description: string
    categorias: Array<ObjectId>
}
 type CreateLivroInput = Omit<Livro, "_id">

export {
    Livro,
    CreateLivroInput
}