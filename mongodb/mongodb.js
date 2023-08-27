const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://mongodb-service/database_name';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  user: 'your_db_user',
  pass: 'your_db_password'
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define your schemas and models here

