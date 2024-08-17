const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/api/sendLead', async (req, res) => {
    try {
        const formData = req.body;

        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const ipData = await ipResponse.json();
        const serverIp = ipData.ip;

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
                location_box_fk: 279
            })
        });

        const responseText = await arboxResponse.text();
        console.log(`Response Status: ${arboxResponse.status}`);
        console.log(`Response Text: ${responseText}`);

        if (!arboxResponse.ok) {
            throw new Error(`HTTP error! status: ${arboxResponse.status} - ${responseText}`);
        }

        const arboxData = JSON.parse(responseText);

        res.json({
            arboxResponse: arboxData,
            serverIp: serverIp
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
