import { getDB } from "../database/mongo";
import { Autor, CreateAutorInput } from "../models/autor";
import { Collection, ObjectId } from "mongodb";

export class AutorRepository {

    getDBAutor(): Collection<Autor> {
        const db = getDB();
        const collection = db.collection<Autor>("autores");
        
        return collection
        
    }

    async getAllAutor(): Promise<Autor[]> {
        const collection = this.getDBAutor()
        const allAutores = await collection.find().toArray();
        return allAutores;
      }

    async getAutorById(id: ObjectId): Promise<Autor| null> {
        const collection = this.getDBAutor()
        const autor = await collection.findOne({ _id: id });
        return autor;
      }

      
    async createAutor(fields: CreateAutorInput): Promise<Autor | null> {
      const { nome, nacionalidade, descricao } = fields
      const collection = this.getDBAutor()
      const autor = await collection.insertOne({
          nome,
          nacionalidade,
          descricao,
          _id: undefined
      })

      console.log(autor)
      const insertedAutor = await collection.findOne({ _id: autor.insertedId })

      return insertedAutor;
    }

    async updateAutor(id: ObjectId, fields: CreateAutorInput): Promise<Autor | null> {
      const { nome, nacionalidade, descricao } = fields
      const collection = this.getDBAutor()
      await collection.updateOne({ _id: id },  {
        $set: {
          nome,
          nacionalidade,
          descricao
        }
      })

      const updatedAutor = await collection.findOne({ _id: id })

      return updatedAutor
    }

    async deleteAutor(id: ObjectId): Promise<Autor | null> {
      const collection = this.getDBAutor()
      const autorToDelete = await collection.findOne({ _id: id })

      if(!autorToDelete) {
        throw new Error('Autor not found')
      }
      await collection.deleteOne({ _id: id })
      return autorToDelete;
    }
}