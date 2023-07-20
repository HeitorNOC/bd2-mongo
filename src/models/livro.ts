import { ObjectId } from "mongodb"
import { EntityId } from "./entityId"



interface Livro extends EntityId {
    nome: string
    ano_lancamento: Number
    autoresObjectId: Array<ObjectId>
    img_url: string
    short_description: string
    categoriasObjectId: Array<ObjectId>
}
 type CreateLivroInput = Omit<Livro, "_id">

export {
    Livro,
    CreateLivroInput
}