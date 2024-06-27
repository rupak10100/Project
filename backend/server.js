require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const TasksRouters = require('./routes/TasksRouters');





const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

mongoose.connect(process.env.MONGO_URI, {
  writeConcern: {
    w: 'majority',
  },
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
  process.exit(1);
});

app.get('/', (req, res) => {
  // Send the HTML file as the response
res.send("I'm Rupak")
});




app.use('/api/tasks', TasksRouters);



app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 - Internal Server Error');
});

app.listen(PORT, () => {
  console.log(`\n  RUPAK Server  ready \n`)
  console.log(`Server is running on port ${PORT}`);
  console.log(`  ➜  Local:   http://localhost:${PORT}/`)
  console.log('  ➜  Network: use --host to expose')

});
