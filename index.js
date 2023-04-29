// Description: Main entry point for the application



//const test = require('./test')
const express = require('express');
const dotenv = require('dotenv').config().parsed;

// express server
const app = express();

 
// home page route requires no auth
app.get('/', (req, res) => {
  res.send('Hello World!');
});


// attach event for uncaught exceptions
// but this is not a good practice,
// you should handle the exceptions
process.on('uncaughtException', err => {
  console.log(err);
});


// routes auth middleware
app.use('/api/', require('./routes/users'))

// routes without auth middleware
app.use('/', require('./routes/echos'))

// start the server
app.listen(dotenv.PORT, () => {
    console.log(`Example app listening at http://localhost:${dotenv.PORT}`);
  }
);