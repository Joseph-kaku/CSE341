// MongoDB connection
const { MongoClient, ObjectId } = require('mongodb');


const getAllContacts = async (req, res, next) => {
    const client = new MongoClient(process.env.MONGODBURI);

    await client.connect()
    const mongoData = await client.db('CSE341').collection('Contacts').find()
    const names = await mongoData.toArray()
    await client.close()
    res.json(names)
}

const getId = async (req, res, next) => {
    const id = new ObjectId(req.params.id)
    const client = new MongoClient(process.env.MONGODBURI);
    await client.connect()
    const mongoData = await client.db('CSE341').collection('Contacts').find({_id: id})
    const name = await mongoData.toArray()
    await client.close()
    res.json(name)
}

const addNewContact = async (req, res, next) => {
    try {
        const client = new MongoClient(process.env.MONGODBURI);
        await client.connect()
        
        const contactData = {
            firstName: "Sunny",
            lastName: "Driggs",
            email: "driggs@test.com",
            favoriteColor: "red",
            birthday: "June 20th, 1990"
        };
        
        const mongoData = await client.db('CSE341').collection('Contacts').insertOne(contactData);
        const insertedId = mongoData.insertedId; // Get the ID of the newly inserted document
        await client.close()
        
        // Return a 201 status (Created) and the ID of the new contact created
        res.status(201).json({ _id: insertedId });
    } catch (error) {
        console.error(error);
        // Handle the error here or send an error response to the client.
        res.status(500).json({ error: 'An error occurred.' });
    }
}

const updateContact = async (req,res,next) => {
    try {
        const id = new ObjectId("650cee2c751b5af5e43fcb40")
        const client = new MongoClient(process.env.MONGODBURI);
        await client.connect()
        const mongoData = await client.db('CSE341').collection('Contacts').updateOne({_id: id}, {$set: {firstName: "Bet"}})
        await client.close()
        
        // Check if the update was successful
        if (mongoData.modifiedCount === 1) {
            res.status(204).send(); // Return a status of 204 (No Content)
        } else {
            res.status(404).json({ error: 'Resource not found' }); // Handle the case where the document was not found
        }
    } catch (error) {
        console.error(error);
        // Handle the error here or send an error response to the client.
        res.status(500).json({ error: 'An error occurred.' });
    }
}

const deleteContact = async (req,res,next) => {
    const id = new ObjectId("65173ec617265eec65acf219")
    const client = new MongoClient(process.env.MONGODBURI);
    await client.connect()
    const mongoData = await client.db('CSE341').collection('Contacts').deleteOne({_id: id})
    await client.close()
    res.json(mongoData.ops)
}

const nameFunction = (req, res, next) => {
    res.json('Liz Kaku');
}




module.exports = {nameFunction, getAllContacts, getId, addNewContact, updateContact, deleteContact};