import mongoose from "mongoose";

export function connectDataBase() {
    const URL_DB = "mongodb://localhost:27017/p2"

    mongoose.connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });

    const conn = mongoose.connect(URL_DB);
    return conn;
}