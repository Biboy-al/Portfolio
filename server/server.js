require('dotenv').config()
require('cors')
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8080

const corsOptions ={
    origin:'http://localhost:4200', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

//import database
const mongooseCon = require('./database/mongodb');

//imports router
const skillsRouter = require('./routes/skills');
const projectsRouter = require('./routes/projects');

//middleware
app.use(cors(corsOptions));
app.use('/skills', skillsRouter);
app.use('/projects', projectsRouter);
app.use(express.json());

//have the server listen
app.listen(
    PORT,
    () => console.log(`Sever is listening on http://localhost:${PORT}`)
)

//Start connecting to mongodb 
mongooseCon();