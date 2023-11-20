const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('../routes/api');
const app = express();
const port = 4200;

// Connect to the database
mongoose
  .connect('mongodb://127.0.0.1:27017/', { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

// Override mongoose's deprecated Promise with Node's Promise.
mongoose.Promise = global.Promise;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  app.use(bodyParser.json());
  app.use('/api', routes);
  app.use((err, req, res, next) => {
    console.log(err);
    next();
  });

  app.listen(port, () => {
    console.log(`Server runs on port ${port}.`);
  });
