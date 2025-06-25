import { create, updateUser, deleteUser, listUsers } from "../services/userService.js";
import {  registerUser, loginUser } from "../services/authService.js"

export function routeUsers(app) {
    app.get("/api/users", async (req, res) => {
        return res.json(await listUsers());
    });

    app.get("/api/users/:id", async (req, res) => {
        return res.json(await listUsers({_id: req.params.id}));
    });

    app.post("/api/register", async (req, res) => {
        try {
            const user = await registerUser(req.body);
            res.status(201).json({ message: "Usuário registrado com sucesso!", user });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    });

    app.post("/api/login", async (req, res) => {
        try {
            const user = await loginUser(req.body);
            res.json({ message: " Login realizado com sucesso!", userId: user._id, name: user.name });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    });

    // app.post("/api/users", async (req, res) => {
    //     try {
    //         const user = await listUsers({ "username": req.body.username });
    //         console.log(user);
    //         if (user.length > 0) {
    //             return res.status(403).json({ "error": "Username já existe! "});
    //         }
    //         const userIncluded = await create(req.body);
    //         return res.status(201).json(userIncluded);
    //     } catch (error) {
    //         return res.status(500).json({ "error": error });
    //     }
    // });

    app.delete("/api/users/:id", async (req, res) => {
        try {
            const { deletedCount } = await deleteUser(req.params.id);
            if(deletedCount > 0) {
                return res.json({"excluído": true});
            }
            return res.json({"excluido": false});
        } catch (error) {
            return res.status(500).json({ "error": error.message });
        }
    });
}