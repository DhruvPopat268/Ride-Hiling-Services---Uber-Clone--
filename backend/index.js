const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser')

const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes')

connectToDb();

app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/captains',captainRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});