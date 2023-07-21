import { ObjectId } from "mongodb";
import { EntityId } from "./entityId";

interface Categoria extends EntityId {
    nome: string,
}

type CreateCategoriaInput = Omit<Categoria, "_id">

export {
    Categoria,
    CreateCategoriaInput
}