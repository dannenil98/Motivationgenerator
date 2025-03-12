const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

function getRandomAdviceID() {
    return Math.floor(Math.random() * 200) + 1; 
}

app.get('/advice', async (req, res) => {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        const advice = response.data.slip.advice;
        const adviceID = getRandomAdviceID();
        res.json({ advice, adviceID });
    } catch (error) {
        console.error('Error fetching advice:', error);
        res.status(500).json({ error: 'Could not fetch advice. Try again later.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});