const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

//load enviroment variables
dotenv.config({ path: "./config/config.env" });

// connect to database
connectDB();

const app = express();

//body parser
app.use(express.json());

//enable cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

//routes
app.use("/api/v1/stores", require("./routes/stores"));

//handle production
if(process.env.NODE_ENV === "production") {
    //static folder
    app.use(express.static(__dirname + "/public/"));

    //handle SPA
    app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.htm"));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
