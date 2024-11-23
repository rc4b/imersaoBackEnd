
// Importa a função para conectar ao banco de dados, definida em dbConfig.js
import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Cria uma conexão com o banco de dados usando a string de conexão obtida da variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts no banco de dados
export  async function getTodosPosts() {
    // Seleciona o banco de dados "Imerso-instabytes" na conexão estabelecida
    const db = conexao.db("Imerso-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
  }

  export async function criarPost(novoPost) {
       const db = conexao.db("Imerso-instabytes");
       const colecao = db.collection("posts");
       return colecao.insertOne(novoPost);
  }

  export async function atualizarPost(id, novoPost) {
     const db = conexao.db("Imerso-instabytes");
     const colecao = db.collection("posts");
     const objID = ObjectId.createFromHexString(id)
     return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}