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
                'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f', // ודא שה-API Key נכון
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: formData.first_name,
                last_name: formData.last_name,
                email: formData.email,
                phone: formData.phone,
                location_box_fk: 279, // ודא ש-ID של קופסת המיקום נכון
                // הוסף כאן פרמטרים נוספים במידת הצורך בהתאם לדוקומנטציה
            })
        });

        if (arboxResponse.status === 405) {
            throw new Error('405 Method Not Allowed - URL or method is incorrect.');
        }

        if (!arboxResponse.ok) {
            throw new Error(`HTTP error! status: ${arboxResponse.status}`);
        }

        const arboxData = await arboxResponse.json();

        // החזרת התשובה ל-Frontend כולל ה-IP של השרת
        res.json({
            arboxResponse: arboxData,
            serverIp: serverIp
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
