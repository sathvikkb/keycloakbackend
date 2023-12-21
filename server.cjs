const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/keycloak")
  .then(() => {
    console.log('Mongo connected');

    // Define the schema and model after the connection is established
    const keyschema = new mongoose.Schema({
      name: {
        type: String
      }
    });

    const collection = mongoose.model('users', keyschema);
    const data = {
      name:"This"
    };

    // Insert data into the collection
    return collection.insertMany([data]);
  })
  .then(() => {
    console.log('Data sent');
  })
  .catch(error => {
    console.error('Error:', error);
  })
  .finally(() => {
    // Close the database connection after the operation is complete (or on error)
    mongoose.disconnect();
  });
