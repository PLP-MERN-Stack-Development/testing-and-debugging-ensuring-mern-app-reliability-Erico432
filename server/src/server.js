const app = require('./app');
const connectDB = require('./config/db');
const { MongoMemoryServer } = require('mongodb-memory-server');
require('dotenv').config({ path: __dirname + '/../.env.test' });

let mongod;

const start = async () => {
  if (process.env.NODE_ENV === 'test') {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    await connectDB(uri);
  } else {
    await connectDB(process.env.MONGO_URI);
  }

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server on ${PORT}`));
};

start();
