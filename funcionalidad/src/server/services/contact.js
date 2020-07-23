import FirestoreLib from '../lib/firestore'

class ContactService{
    constructor(){
        this.firestoreDB = new FirestoreLib()
    }

    createContact = ({ name, email, state, city }) => this.firestoreDB.create('contact', { name, email, state, city })
}

export default ContactService