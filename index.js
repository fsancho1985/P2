import express from 'express';
import { connectDataBase } from './db/connection.js';

import { routeUsers } from './routes/userRoutes.js';
import { routeRaces } from './routes/raceRoutes.js';

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Acesse a API em /api/nome_recurso");
});

try {
    await connectDataBase();
    const PORT = 3000;
    app.listen(PORT);
    console.log(`Wainting for connections on port ${PORT}`);
} catch (error) {
    console.log(`Error: ${error}`);
}

routeUsers(app);
routeRaces(app);

export { app };