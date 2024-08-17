const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

// טיפול בבקשות מה-Frontend
app.post('/api/sendLead', async (req, res) => {
    try {
        const formData = req.body;

        // שליחת הבקשה ל-API של Arbox
        const response = await fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
            method: 'POST',
            headers: {
                'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // החזרת התשובה ל-Frontend
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
