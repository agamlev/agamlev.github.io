document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        "first_name": document.getElementById('first_name').value,
        "last_name": document.getElementById('last_name').value,
        "email": document.getElementById('email').value,
        "phone": document.getElementById('phone').value,
        "location_box_fk": 279, 
        "users_boxes_owner_id": 3546456
    };

    const responseBox = document.getElementById('responseBox');
    const countryInfo = document.getElementById('countryInfo');

    // שלב 1: קבלת מקור ה-IP שממנו נשלחת הבקשה
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(ipData => {
            const clientIp = ipData.ip;

            // הצגת המידע בחלון הצד
            countryInfo.innerHTML = `כתובת ה-IP של השרת השולח: ${clientIp}`;
            countryInfo.style.display = 'block';

            // שלב 2: שליחת הבקשה ל-API של Arbox
            return fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
                method: 'POST',
                headers: {
                    'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => {
                if (!response.ok) {
                    if (response.status === 401) {
                        throw new Error('Unauthorized: API Key or credentials might be incorrect.');
                    } else {
                        throw new Error('HTTP error! status: ' + response.status);
                    }
                }
                return response.json();
            }).then(data => {
                responseBox.style.display = 'block';
                responseBox.innerHTML = `תשובה מהשרת:\n${JSON.stringify(data, null, 2)}\n\nכתובת ה-IP של השרת השולח: ${clientIp}`;
            });
        })
        .catch(error => {
            console.error('Error:', error);
            responseBox.style.display = 'block';
            responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p>\n${error.message}`;
        });
});
