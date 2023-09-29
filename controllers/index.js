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
    const client = new MongoClient(process.env.MONGODBURI);
    await client.connect()
    const mongoData = await client.db('CSE341').collection('Contacts').insertOne({
    firstName: "Sunny", 
    lastName: "Biggs", 
    email:"sunny@test.com",
    favoriteColor: "red", 
    birthday: "March 20th, 1990"})
    // const name = await mongoData.toArray()
    await client.close()
    res.json(mongoData.ops)
}

const updateContact = async (res,req,next) => {

}

const deleteContact = async (res,req,next) => {
    
}

const nameFunction = (req, res, next) => {
    res.json('Liz Kaku');
}




module.exports = {nameFunction, getAllContacts, getId, addNewContact};