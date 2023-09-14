const MongoClient = require('mongodb').MongoClient;

class MongoDbSingleton {
  constructor() {
    this.db = null;
  }

  async connect(url,dbName) {
    if (this.db) {
      return this.db;
    }

    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Access the database, which will create it if it doesn't exist.
    this.db = client.db(dbName);
    return this.db;
  }
}


module.exports = new MongoDbSingleton();