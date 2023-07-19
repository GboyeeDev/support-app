const express = require('express');
const colors = require('colors');
const app = express();
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

//Database Connection
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk' });
});

// Routes
app.use('/api/users', require('./routes/users/usersRoute'));
app.use('/api/tickets', require('./routes/tickets/ticketsRoute'));

// Middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
