import { Race } from "../models/race.js";

export async function createRace({ nameRace, data, city }) {
    return await Race.create({ nameRace, data, city, subscribed: [] });
}

export async function listRaces(query = {}, { sortBy = 'name', sortOrder = 'descending'} = {}) {
    return await Race.find(query).sort({[sortBy]: sortOrder});
}

export async function subscribeUser(raceId, userId) {
    const race = await Race.findById(raceId);
    if (!race) throw new Error("Corrida não identificada!");
    if (!race.subscribed.includes(userId)) {
        race.subscribed.push(userId);
        await race.save();
    }

    return race;
}