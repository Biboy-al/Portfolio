const mongoose = require('mongoose');
require('dotenv');

//await mongoose.connect(process.env.DATABASE_URL);

const mongooseCon = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_URL, {
            "dbName" : "portfolio"
        });

        console.log("MongoDB Connected...")
    } catch(err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // Exit process with failure
    }
}

module.exports = mongooseCon;