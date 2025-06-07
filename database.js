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
    const findResult = await collection.find({}).toArray()
    console.log("Found documents =>", findResult)

    return 'Done.'
}

main()
.then(console.log)
.catch(console.error)
.finally(()=> client.close())

