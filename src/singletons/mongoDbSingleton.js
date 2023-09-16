const mongoose = require('mongoose');

class MongoDbSingleton {
  constructor() {
    this.db = null;
    this.connect();
  }

  async connect() {
    if (this.db) {
      return this.db;
    }

    const url = process.env.DATABASE_URL + process.env.NODE_ENV;
    const connection = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  

    this.db = mongoose.connection;
    return this.db;
  }

  async getInstance() {
    if (!this.db) {
      await this.connect();
    }
    
    return this.db;
  }
}

module.exports = new MongoDbSingleton();
