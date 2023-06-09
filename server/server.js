const express = require('express');
const app = express();
const fs = require('fs');

let data = [];

function loadData() {
  const contents = fs.readFileSync('../python_tracker/results.json');
  data = JSON.parse(contents);
  console.log('Results reloaded');
}

app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

app.get('/results', (req, res) => {
    loadData();
    res.json(data);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
