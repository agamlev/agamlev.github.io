document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        "first_name": document.getElementById('first_name').value,
        "last_name": document.getElementById('last_name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
    };

    // שליחת הנתונים לשרת ה-Backend שלך
    fetch('/api/sendLead', { // מניחים שהשרת שלך מתארח באותו דומיין
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
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
});
