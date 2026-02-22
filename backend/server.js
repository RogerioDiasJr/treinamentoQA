﻿﻿const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { db, seedData } = require("./database");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => { console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`); next(); });

// Servir arquivos estáticos do Frontend (HTML/CSS)
app.use(express.static(path.join(__dirname, "../frontend")));

app.post("/api/reset", (req, res) => { seedData(); res.json({ message: "Ambiente resetado!" }); });
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;
    db.get("SELECT * FROM users WHERE email = ? AND password = ?", [email, password], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (row) res.json({ message: "Login OK", token: "fake-jwt", user: row.email });
        else res.status(401).json({ error: "Credenciais inválidas" });
    });
});
app.get("/api/products", (req, res) => {
    const delay = req.query.delay ? parseInt(req.query.delay) : 0;
    setTimeout(() => {
        db.all("SELECT * FROM products", [], (err, rows) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(rows);
        });
    }, delay);
});
app.post("/api/products", (req, res) => {
    const { name, price, stock } = req.body;
    
    if (!name || price === undefined || stock === undefined) {
        return res.status(400).json({ error: "Dados incompletos. Envie name, price e stock." });
    }

    db.run("INSERT INTO products (name, price, stock) VALUES (?, ?, ?)", [name, price, stock], function(err) {
        if (err) {
            console.error("Erro ao inserir produto:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Produto adicionado com sucesso!", id: this.lastID });
    });
});
app.get("/api/heroes", (req, res) => {
    db.all("SELECT * FROM heroes", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});
app.delete("/api/heroes/:id", (req, res) => {
    const id = req.params.id;
    db.run("DELETE FROM heroes WHERE id = ?", id, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        if (this.changes > 0) res.json({ message: "Herói excluído", id: id });
        else res.status(404).json({ error: "Herói não encontrado" });
    });
});

// Rota padrão para servir o index.html caso não ache rota de API
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => { console.log(`🚀 Servidor rodando em http://localhost:${PORT}`); });
