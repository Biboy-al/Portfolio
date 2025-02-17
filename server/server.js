const express = require('express')
const app = express()
const PORT = 8080
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://biboy:<db_password>@portfolio.t45iz.mongodb.net/?retryWrites=true&w=majority&appName=portfolio";

app.listen(
    PORT,
    () => console.log(`Sever is listening on http://localhost:${PORT}`)
)

app.get( '/skills', (req, res) =>{
    res.status(200).send({
        "hi":"hi"
    })
})

app.get( '/projects', (req, res) =>{
    res.send('Obtaining projects')
})



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);