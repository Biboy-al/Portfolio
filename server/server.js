require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 8080
const { MongoClient, ServerApiVersion } = require('mongodb');

//import database components
const mongooseCon = require('./database/mongodb');
const Skill = require('./models/skills');

//imports router
const skillsRouter = require('./routes/skills');
const projectsRouter = require('./routes/projects');

//middleware
app.use('/skills', skillsRouter);
app.use('/projects', projectsRouter);
app.use(express.json());



app.listen(
    PORT,
    () => console.log(`Sever is listening on http://localhost:${PORT}`)
)

mongooseCon();

const java = new Skill({
  "name" : "Java",
  "desc" : "aaaa",
  "prof" : "",
  img : "",
});

const  save = async ()=> {await java.save()};

save()


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");

//     const db = client.db("portfolio");
//     const skills = db.collection("skills");

//     const skill = await skills.findOne({
//       "skill" : "java"
//     });

//     console.log(skill);

//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);