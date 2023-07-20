import { ObjectId } from "mongodb";
import { EntityId } from "./entityId";

interface Autor extends EntityId {
    nome: string
    nacionalidade: string
    descricao: string
    livros: Array<ObjectId>
}

type CreateAutorInput = Omit<Autor, "_id">

export {
    Autor,
    CreateAutorInput
}