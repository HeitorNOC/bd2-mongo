import { Collection, ObjectId } from "mongodb";
import { Livro } from "../models/livro";
import { getDB } from "../database/mongo";

export class LivroRepository {

    getDBLivros(): Collection<Livro> {
        const db = getDB();
        const collection = db.collection<Livro>("livros");
        
        return collection
    }
    
  async getAllLivros(): Promise<Livro[]> {
    const collection = this.getDBLivros()
    const allLivros = await collection.find().toArray();
    return allLivros;
  }

  async getLivroById(id: ObjectId): Promise<Livro | null> {
    const collection = this.getDBLivros()
    const livro = await collection.findOne({ _id: id });
    return livro;
  }
}
