const express = require('express');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the Sequelize API with MVC!');
});

// User routes
app.use('/api/users', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});