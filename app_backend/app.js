const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
// use cors for api requests
const cors = require('cors');
app.use(cors());

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Sequelize API with MVC!');
});

// User routes
app.use('/api/users', userRoutes);
sequelize.authenticate()
  .then(() => console.log('Connected to MariaDB successfully!'))
  .catch(err => console.error('Unable to connect to MariaDB:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});