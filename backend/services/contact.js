const MySqlLib = require('../lib/mysql')

class ContactService{
    constructor(){
        this.db = new MySqlLib()
    }

    async createContact({name, email, state, city}){
        try {
            return await this.db.create({name, email, state, city})
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = ContactService