const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'https://data.mongodb-api.com/app/data-dnris/endpoint/data/v1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
