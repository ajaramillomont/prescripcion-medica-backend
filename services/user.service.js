const { User } = require('./../db/models/user.model');
const bcrypt = require('bcryptjs');
const boom = require('@hapi/boom');

class UserService {
    async findAll() {
        const users = await User.findAll();
        return users;
    }

    async findOne(id) {
        const user = await User.findByPk(id);
        if(!user) {
            throw boom.notFound('Usuario no encontrado');
        }
        return user;
    }

    async create(data) {
        const hash = await bcrypt.hash(data.password, 10);
        const newUser = await User.create({
            ...data,
            password: hash
        });
        return newUser;
    }

    async update(id, changes) {
        const user = await this.findOne(id);
        const hash = await bcrypt.hash(changes.password, 10);
        const userUpdated = await user.update({
            ...changes,
            password: hash
        });
        return userUpdated;
    }

    async delete(id) {
        const user = await this.findOne(id); 
        await user.destroy();
        return { id };
    }
}

module.exports = UserService;