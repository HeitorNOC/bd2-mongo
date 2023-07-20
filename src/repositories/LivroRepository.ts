import { Collection, ObjectId } from "mongodb";
import { CreateLivroInput, Livro } from "../models/livro";
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

  async createLivro(fields: CreateLivroInput): Promise<Livro | null> {
    const { nome, autoresObjectId, img_url, short_description, categoriasObjectId, ano_lancamento } = fields
    const collection = this.getDBLivros()
    const livro = await collection.insertOne({
        nome, autoresObjectId, img_url, short_description, categoriasObjectId, ano_lancamento,
        _id: undefined
    })
    const insertedLivro = await collection.findOne({ _id: livro.insertedId })

    return insertedLivro
  }
}
