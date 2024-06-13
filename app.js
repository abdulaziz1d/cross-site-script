const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

app.post('/data', (req, res) => {
  const data = req.body;

  fs.appendFile('data.txt', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Error writing to file', err);
      return res.status(500).send('Server error');
    }

    res.status(200).send('Data received and stored');
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
