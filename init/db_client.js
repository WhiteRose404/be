


const {
    MongoClient
  } = require('mongodb')
  const uri = 
    `mongodb+srv://admin_access_shipyard:${process.env.db_key}@jisa.uhjum.mongodb.net/?retryWrites=true&w=majority`;
  
  
  
  
  const client = new MongoClient(uri);
  module.exports = {
    async run() {
      return new Promise((resolve, reject) => {
        client.connect()
          .then(() => resolve(client.db(process.env.db_name)))
          .catch(err=>{console.log(err)})
      })
  
  
    }
  }