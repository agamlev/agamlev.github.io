document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        "first_name": document.getElementById('first_name').value,
        "last_name": document.getElementById('last_name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
    };

    // שליחת הנתונים לשרת ה-Backend שלך
    fetch('/api/sendLead', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // הצגת התגובה המקורית בקונסולה כדי לבדוק מה מתקבל
        return response.text().then(text => {
            console.log('Response text:', text);
            try {
                return JSON.parse(text); // ננסה להמיר ל-JSON רק אם זה אפשרי
            } catch (error) {
                throw new Error(`Failed to parse response as JSON. Original text: ${text}`);
            }
        });
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
});
