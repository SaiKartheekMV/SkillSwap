const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res)=> {
    res.json({message: "Server is Running and Successfully connected client!"});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server is Running on port ${PORT}`));