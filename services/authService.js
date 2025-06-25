import { User } from "../models/user.js";

export async function registerUser({username, name, email, password}) {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error("Email já cadastrado!");

    const user = new User({username, name, email, password });
    await user.save();
    return user;
}

export async function loginUser({ email, password }) {
    const user = await User.findOne({ email, password });
    if (!user) throw new Error("Usuário ou senha inválidos!");
    return user;
}