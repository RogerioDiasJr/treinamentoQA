﻿﻿const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const fs = require("fs");

// Garante que a pasta 'data' exista para organizar o arquivo do banco
const dataDir = path.resolve(__dirname, "data");
if (!fs.existsSync(dataDir)){ fs.mkdirSync(dataDir); }

const dbPath = path.join(dataDir, "qa-dojo.sqlite");

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) console.error("Erro ao conectar ao DB", err.message);
    else { console.log("Conectado ao SQLite."); initDb(); }
});
function initDb() {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT UNIQUE, password TEXT, role TEXT)`);
        db.run(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price REAL, stock INTEGER)`);
        db.run(`CREATE TABLE IF NOT EXISTS heroes (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, alter_ego TEXT)`);
        seedData();
    });
}
function seedData() {
    db.serialize(() => {
        db.run("DELETE FROM users"); db.run("DELETE FROM products"); db.run("DELETE FROM heroes");
        const stmtUser = db.prepare("INSERT INTO users (email, password, role) VALUES (?, ?, ?)");
        stmtUser.run("admin@qadojo.com", "supersecret", "admin");
        stmtUser.run("student@qadojo.com", "123456", "student");
        stmtUser.finalize();
        const stmtProd = db.prepare("INSERT INTO products (name, price, stock) VALUES (?, ?, ?)");
        stmtProd.run("Notebook Gamer", 4500.00, 10);
        stmtProd.run("Mouse Sem Fio", 120.50, 50);
        stmtProd.run("Teclado Mecânico", 350.00, 0);
        stmtProd.finalize();
        const stmtHero = db.prepare("INSERT INTO heroes (name, alter_ego) VALUES (?, ?)");
        stmtHero.run("Batman", "Bruce Wayne");
        stmtHero.run("Superman", "Clark Kent");
        stmtHero.run("Wonder Woman", "Diana Prince");
        stmtHero.finalize();
        console.log("Banco de dados populado/resetado.");
    });
}
module.exports = { db, seedData };
