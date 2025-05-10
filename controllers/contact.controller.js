const ContactMessageService = require('./../services/contact.service');
const service = new ContactMessageService();

const createMessage = async(req, res, next) => {
    try {
        const body = req.body;
        const newMessage = await service.create(body);
        res.status(200).json({ message: 'Message created', newMessage });
    } catch (error) {
        next(error);
    }
}

module.exports = { createMessage };