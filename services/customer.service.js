const { Customer } = require('./../db/models/customer.model');
const boom = require('@hapi/boom');
const bcrypt = require('bcryptjs');

class CustomerService {

    async findAll() {
        const customers = await Customer.findAll();
        return customers;
    }

    async findOne(id) {
        const customer = await Customer.findByPk(id);
        if(!customer) {
            throw boom.notFound('Customer not found');
        }
        return customer;
    }

    async create(data) {
        const newCustomer = await Customer.create(data);
        return newCustomer;
    }

    async update(id, changes) {
        const customer = await this.findOne(id);
        const updatedCustomer = await customer.update(changes);
        return updatedCustomer;
    }

    async delete(id) {
        const customer = await this.findOne(id);
        await customer.destroy();
        return { id };
    }
}

module.exports = CustomerService;
