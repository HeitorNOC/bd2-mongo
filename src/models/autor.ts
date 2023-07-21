import { ObjectId } from "mongodb";
import { EntityId } from "./entityId";

interface Autor extends EntityId {
    nome: string
    nacionalidade: string
    descricao: string
}

type CreateAutorInput = Omit<Autor, "_id">

export {
    Autor,
    CreateAutorInput
}