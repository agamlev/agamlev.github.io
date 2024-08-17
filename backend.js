fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
    method: 'POST',
    headers: {
        'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f', // ודא שה-API Key נכון
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    const responseBox = document.getElementById('responseBox');
    responseBox.style.display = 'block';
    responseBox.innerHTML = `תשובה מה-API של Arbox: ${JSON.stringify(data, null, 2)}`;
})
.catch(error => {
    console.error('Error:', error);
    const responseBox = document.getElementById('responseBox');
    responseBox.style.display = 'block';
    responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p>\n${error.message}`;
});
