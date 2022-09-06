const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const categoriesRouter = require('./routes/categories');

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
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/posts', postsRouter);
app.use('/api/v1/categories', categoriesRouter);

app.listen(PORT, () => console.log('listening on port ' + PORT));
