const {MongoClient} = require("mongodb")
const url = "mongodb+srv://itsjustabhii:Lewishamilton@nodetutorial.odvzbzm.mongodb.net/"

const client = new MongoClient(url)

const dbName = 'NodeTest'

async function main() { //connect to client
    await client.connect()
    console.log('Connected successfully to Server')
    const db = client.db(dbName)
    const collection = db.collection('User')

    //Read
    const findResult = await collection.find({firstName:"Abhishek"}).toArray()
    console.log("Found documents =>", findResult)

    //Creating a user
    const data = {
        firstName: "Shivani",
        lastName: "Mungara",
        city: "Hyderabad",
        phonenumber: "8812309829"
    }

    //Write
    // const insertResult = await collection.insertMany([data])
    // console.log("Inserted documents",data)

    // //Update
    // const updateResult = await collection.updateOne({})


    return 'Done.'
}

main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close())

