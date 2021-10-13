import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
import cors from 'cors'

const PORT = 5000;
const DB_URL = `mongodb+srv://insert4079:58645380Lp@cluster0.1izts.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200
}


const app = express();

app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
});
app.use(express.json());
app.use('/api', router);

app.use(cors(corsOptions));
// app.options('*', cors());


async function startApp(uri, callback) {
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('SERVER RUNNING ON PORT ' + PORT));
    } catch(e) {
        console.log(e)
    }
}

startApp();
