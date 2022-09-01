const express = require('express');
const app = express();
const PORT = process.env.PORT || 5555;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('Connected to MongoDB'))
  .catch((err) => {
    console.log(err);
  });
// app.use('/', (req, res) => {
//   res.send('main url');
// });

app.use('/api/v1/auth', authRoute);

app.listen(PORT, () => console.log('listening on port ' + PORT));
