const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

const goldPln = require('./routes/goldPln');
const goldRealEstate = require('./routes/goldRealEstate');
const wigRealEstate = require('./routes/wigRealEstate');

app.use(cors());
// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));
app.use('/api/gold-pln', goldPln);
app.use('/api/gold-vs-realestate', goldRealEstate);
app.use('/api/wig-vs-realestate', wigRealEstate);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port} (accessible externally)`);
});