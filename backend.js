fetch('/api/sendLead', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // כאן עלולה לקרות השגיאה אם התגובה אינה JSON
})
.then(data => {
    const responseBox = document.getElementById('responseBox');
    responseBox.style.display = 'block';
    responseBox.innerHTML = `תשובה מה-API של Arbox: ${JSON.stringify(data.arboxResponse, null, 2)}\n\n` +
                            `מקור ה-IP של השרת: ${data.serverIp}`;
})
.catch(error => {
    console.error('Error:', error);
    const responseBox = document.getElementById('responseBox');
    responseBox.style.display = 'block';
    responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p>\n${error.message}`;
});
