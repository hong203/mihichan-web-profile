const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint example
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'John Doe',
    bio: 'Web Developer | Designer',
    avatar: '/images/avatar.jpg'
  });
});

// Catch all handler: send back React's index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Network access: http://192.168.1.89:${port}`);
});