const { ContactMessage } = require('./../db/models/contact-message.model');
class ContactMessageService {
    async create(data) {
        const newMessage = await ContactMessage.create(data);
        return newMessage;
    }   
}

module.exports = ContactMessageService;