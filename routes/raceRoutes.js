import { createRace, listRaces, subscribeUser } from "../services/raceService.js";

export function routeRaces(app) {
    app.get("/api/races", async (req, res) => {
        const races = await listRaces();
        res.json(races);
    });

    app.post("/api/races", async (req, res) => {
        try {
            const race = await createRace(req.body);
            res.status(201).json(race);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    app.post("/api/races/:id/subscription", async (req, res) => {
        try {
            const { userId } = req.body;
            const race = await subscribeUser(req.params.id, userId);
            res.json(race);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });
}