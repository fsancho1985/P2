import { User } from "../models/user.js";

export async function create({ username, email, password, name }){
    const user = new User({
        username,
        email,
        password,
        name
    });

    return await user.save();
}

export async function listUsers(query = {}, { sortBy = 'name', sortOrder = 'descending'} = {}) {
    return await User.find(query).sort({[sortBy]: sortOrder});
}

export async function updateUser(userId, { username, email, password, name }) {
    return await User.findByIdAndUpdate(
        {_id: userId},
        {$set: { username, email, password, name }},
        {new: true}
    );
}

export async function deleteUser(userId) {
    return await User.findByIdAndDelete({_id: userId});
}