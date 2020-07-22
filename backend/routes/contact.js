const express = require('express')
const ContactService = require('../services/contact')
const { createContactSchema } = require('../utils/schemas/contact')
const validationHandler = require('../utils/middleware/validationHandler')

function contactApi(app) {

    const router = express.Router()
    app.use('/api/contacts', router)

    const contacService = new ContactService()

    router.post('/', validationHandler(createContactSchema), async (req, res, next) => {
        const { body: contact } = req
        try {
            const createContact = await contacService.createContact({ contact })

            res.status(201).json({
                data: createContact,
                message: 'Contact create'
            })
        } catch (error) {
            next(error)
        }
    })
}

module.exports = contactApi