const UserService = require('./../services/user.service');
const service = new UserService();

const getUsers = async(req, res, next) => {
    try {
        const users = await service.findAll();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

const getUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(id);
        res.json(user);
    } catch (error) {
        next(error);
    }
}

const createUser = async(req, res, next) => {
    try {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
}

const updateUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedUser = await service.update(id, body);
        res.json({message: 'Usuario actualizado correctamente', Datos: updatedUser});
    } catch (error) {
        next(error);
    }
}

const deleteUser = async(req, res, next) => {
    try {
        const { id }= req.params;
        await service.delete(id);
        res.json({
            message: `Usuario borrado correctamente`,
            id
        })
    } catch (error) {
        next(error);
    }
}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }