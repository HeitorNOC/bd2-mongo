import { Collection, ObjectId } from "mongodb";
import { Categoria, CreateCategoriaInput } from "../models/categoria";
import { getDB } from "../database/mongo";

export class CategoriaRepository {

    getDBCategoria(): Collection<Categoria> {
        const db = getDB();
        const collection = db.collection<Categoria>("categorias");
        
        return collection
        
    }

    async getAllCategoria(): Promise<Categoria[]> {
        const collection = this.getDBCategoria()
        const allCategorias = await collection.find().toArray();
        return allCategorias;
      }

      async getCategoriaById(id: ObjectId): Promise<Categoria | null> {
        const collection = this.getDBCategoria()
        const categoria = await collection.findOne({ _id: id });
        return categoria;
      }

      
  async createCategoria(fields: CreateCategoriaInput): Promise<Categoria | null> {
    const { nome } = fields
    const collection = this.getDBCategoria()
    const livro = await collection.insertOne({
        nome,
        _id: undefined
    })
    const insertedCategoria= await collection.findOne({ _id: livro.insertedId })

    return insertedCategoria;
  }

  async updateCategoria(id: ObjectId, fields: CreateCategoriaInput): Promise<Categoria | null> {
    const { nome } = fields
    const collection = this.getDBCategoria()
    const categoria = await collection.updateOne({ _id: id },  {
      $set: {
        nome
      }
    })

    if (!categoria.upsertedId) {
      return null
    }
    const updatedCategoria = await collection.findOne({ _id: categoria.upsertedId })

    return updatedCategoria
  }


  async deleteLivro(id: ObjectId): Promise<Categoria | null> {
    const collection = this.getDBCategoria()
    const CategoriaToDelete = await collection.findOne({ _id: id })

    if(!CategoriaToDelete) {
      throw new Error('Categoria not found')
    }
    await collection.deleteOne({ _id: id })
    return CategoriaToDelete;

  }
}



