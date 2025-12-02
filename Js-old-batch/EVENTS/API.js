const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON request bodies

// API function (endpoint handler) for a GET request to retrieve users
app.get('/users', (req, res) => {
  // In a real application, you would fetch users from a database
  const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
  res.json(users); // Send a JSON response with the list of users
});

// API function (endpoint handler) for a POST request to create a new user
app.post('/users', (req, res) => {
  const newUser = req.body; // Access data from the request body
  // In a real application, you would save the new user to a database
  console.log('New user created:', newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});