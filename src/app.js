require('dotenv').config();
const express = require('express');
const app = express();

require('./utils/init-routes')('/api/v1', app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

module.exports = app;
