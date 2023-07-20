import { ObjectId } from "mongodb";
import { EntityId } from "./entityId";

interface Categoria extends EntityId {
    nome: string,
    livros: Array<ObjectId>
}

type createCategoriaInput = Omit<Categoria, "_id">

export {
    Categoria,
    createCategoriaInput
}