require('dotenv').config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors({origin:true}));
const privateKey = process.env.PRIVATE_KEY;
const PORT = process.env.PORT || 3005;

app.post('/authenticate',async(req,res)=>{
    const {username} = req.body;
    try{
        const response = await axios.put('https://api.chatengine.io/users/', { username: username, secret: username }, { headers: { 'PRIVATE-KEY': privateKey } });
        return res.status(response.status).json(response.data);
    }
    catch(error){
        console.log(error);
    }
})

app.listen(PORT);