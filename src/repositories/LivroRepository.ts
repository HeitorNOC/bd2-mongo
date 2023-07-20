import { ObjectId } from "mongodb";
import { Livro } from "../models/livro";
import { getDB } from "../database/mongo";

export class LivroRepository {
  async getAllLivros(): Promise<Livro[]> {
    const db = getDB(); 
    const collection = db.collection<Livro>("livros");
    const allLivros = await collection.find().toArray(); 
    console.log(allLivros)
    return allLivros
  }
}
