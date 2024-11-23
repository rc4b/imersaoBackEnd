import express from "express";
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus:200
}

const upload = multer({dest:"./uploads"});

const routes = (app) => {
    // Habilita o middleware para analisar dados JSON enviados nas requisições
    app.use(express.json());
    app.use(cors(corsOptions));

    // Rota para obter todos os posts do banco de dados
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)

    app.put("/upload/:id", atualizarNovoPost);
  
}; 

export default routes;