const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(
      `Database Connection Error: ${error.message}`.red.underline.bold
    );
    process.exit(1);
  }
};

module.exports = connectDB;
