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
const allowedOrigins = [
  'https://ride-hiling-services-uber-clone-0fip.onrender.com',
  'http://localhost:3000'
];

app.use((req, res, next) => {
  console.log('CORS Origin:', req.headers.origin); // Log the actual origin
  next();
});

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like curl or mobile apps)
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.onrender.com')
    ) {
      return callback(null, true);
    } else {
      console.log('Blocked by CORS:', origin); // Log which origin was blocked
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

  

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoutes);
app.use('/captains', captainRoutes)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});