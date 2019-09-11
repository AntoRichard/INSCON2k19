const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json({ extends: false }));
app.use(express.static(path.join(__dirname, 'Public')));
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(PORT, () => console.log(`Server running in PORT : ${PORT}`));
