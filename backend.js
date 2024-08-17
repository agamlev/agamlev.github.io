document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        "first_name": document.getElementById('first_name').value,
        "last_name": document.getElementById('last_name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "location_box_fk": 279, // הוספת הפרמטר location_box_fk
        "users_boxes_owner_id": 3546456 // אם פרמטר זה דרוש, ודא שהוא כלול
    };

    // שליחת הנתונים לשרת ה-Backend שלך
    fetch('/api/sendLead', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f' // ודא שה-API Key נכון
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        // בדיקה אם התגובה היא JSON
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
            return response.json(); // אם התגובה היא JSON, להחזיר JSON
        } else {
            return response.text().then(text => {
                throw new Error(`Unexpected response format: ${text}`);
            });
        }
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
