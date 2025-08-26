const express = require("express");
const mongoose = require("mongoose");
const secureMern = require("secure-mern");
const path = require('path')

require("dotenv").config();

// const admincontrolroute = require('./routes/admincotrolroute')

const app = express();

secureMern(app);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// app.use('/admin', admincontrolroute)

app.get('/', (req, res) => {
    res.send(`Server running on port ${process.env.PORT}`);
})

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});