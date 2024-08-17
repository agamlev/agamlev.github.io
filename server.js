const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/api/sendLead', async (req, res) => {
    try {
        const formData = req.body;

        console.log('Received form data:', formData); // הדפסת הנתונים שהתקבלו לשרת

        // שליחת הבקשה ל-API של Arbox
        const arboxResponse = await fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
            method: 'POST',
            headers: {
                'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                location_box_fk: 279 // ודא שה-ID של הקופסה נכון
            })
        });

        console.log(`Response Status: ${arboxResponse.status}`); // הדפסת סטטוס התגובה מה-API
        const responseText = await arboxResponse.text();
        console.log(`Response Text: ${responseText}`); // הדפסת טקסט התגובה מה-API

        if (arboxResponse.status === 405) {
            throw new Error('405 Method Not Allowed - URL or method is incorrect.');
        }

        if (!arboxResponse.ok) {
            throw new Error(`HTTP error! status: ${arboxResponse.status} - ${responseText}`);
        }

        const arboxData = JSON.parse(responseText);

        // החזרת התשובה ל-Frontend
        res.json({
            arboxResponse: arboxData,
            serverIp: formData.serverIp
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
