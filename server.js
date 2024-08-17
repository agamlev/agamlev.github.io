const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/api/sendLead', async (req, res) => {
    try {
        const formData = req.body;

        // קבלת ה-IP של השרת שממנו נשלחת הבקשה
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const serverIp = ipData.ip;

        // שליחת הבקשה ל-API של Arbox
        const arboxResponse = await fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
            method: 'POST',
            headers: {
                'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!arboxResponse.ok) {
            throw new Error(`HTTP error! status: ${arboxResponse.status}`);
        }

        const arboxData = await arboxResponse.json();

        // החזרת התשובה ל-Frontend כולל ה-
