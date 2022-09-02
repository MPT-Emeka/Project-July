const express = require('express')
const PORT = 6000;
const User = require('./model');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();



app.use(express.json());

const Database = "mongodb+srv://julyProject:julyProject@july-project.rebjncx.mongodb.net/TestDBJuly?retryWrites=true&w=majority"


app.post("/store", async (req, res) => {
    const reqBody = req.body;
    const nextGenite = new User(reqBody);
    const findStudent = await User.findOne({ fullname: reqBody.fullname })
    if(findStudent){
        return res.status(400).send("The nextGenite already dy kampe");
    }
    else{
        await nextGenite.save();
        return res.status(200).send(nextGenite);
    }
})



mongoose.connect(Database);
console.log("Connected to Database")
app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}`);
    });
            
