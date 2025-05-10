const CustomerService = require('./../services/customer.service');
const service = new CustomerService();

const getCustomers = async (req, res, next) => {
    try {
        const customers = await service.findAll();
        res.json(customers);
    } catch (error) {
        next(error);
    }
}

const getCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const customer = await service.findOne(id);
        res.json(customer);
    } catch (error) {
        next(error);
    }
}

const createCustomer = async (req, res, next) => {
    try {
        const body = req.body;
        const newCustomer = await service.create(body)
        res.status(201).json({ message: 'Customer created', newCustomer})
    } catch (error) {
        next(error);
    }
}

const updateCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const updatedCustomer = await service.update(id, body);
        res.status(200).json({ message: 'Customer updated', updatedCustomer });
    } catch (error) {
        next(error);
    }
}

const deleteCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        await service.delete(id);
        res.status(200).json({ message: 'Customer deleted'});
    } catch (error) {
        next(error);
    }
}

module.exports = { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer };