import mongoose from "mongoose";

export function connectDataBase() {
    /**conexão com banco de dados local Compass */
    // const URL_DB = "mongodb://localhost:27017/p2"

    /**conexão com banco de dados remoto Atlas */
    const URL_DB = "mongodb+srv://gustavo:gustavo@cluster0.egeh0mc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    mongoose.connection.on("open", () => {
        console.log("Conectado ao mongoDB com sucesso!");
    });

    const conn = mongoose.connect(URL_DB);
    return conn;
}