const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const goldPln = require('./routes/goldPln');
const goldRealEstate = require('./routes/goldRealEstate');
const wigRealEstate = require('./routes/wigRealEstate');

app.use(cors());
app.use('/api/gold-pln', goldPln);
app.use('/api/gold-vs-realestate', goldRealEstate);
app.use('/api/wig-vs-realestate', wigRealEstate);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});