import app from '../config'

class FirestoreLib{
    constructor(){
        this.db = app.firestore()
    }

    create = (collection, data) => this.db.collection(collection).add(data)
}

export default FirestoreLib