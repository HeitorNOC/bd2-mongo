import { Router } from "express"
import { getDB } from "../database/mongo" // Importar a função getDB

const router = Router()

router.get("/livros", async (req, res) => {
  try {
    const db = getDB(); // Obter o banco de dados usando a função getDB
    const collection = db.collection("livros");
    const allLivros = await collection.find().toArray(); // Usar toArray() para transformar o cursor em um array
    return res.status(200).json(allLivros); // Usar json() em vez de send() para enviar um array JSON
  } catch (error) {
    console.error("Erro ao buscar livros:", error);
    return res.status(500).json({ message: "Erro ao buscar livros" });
  }
});

export { router }
