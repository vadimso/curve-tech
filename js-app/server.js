// server.js
const express = require('express');
const app = express();
const ip = require('ip');

const PORT = 3000;

app.get('/host-ip', (req, res) => {
    const hostIP = ip.address();
    res.json({ hostIP });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

