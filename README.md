<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <style>
        /* Your existing styles */
    </style>
</head>
<body>
    <form id="registrationForm">
        <h1>טופס הרשמה</h1>
        <label for="first_name">שם פרטי:</label>
        <input type="text" id="first_name" name="first_name" required>
        
        <label for="last_name">שם משפחה:</label>
        <input type="text" id="last_name" name="last_name" required>
        
        <label for="email">כתובת מייל:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">טלפון:</label>
        <input type="tel" id="phone" name="phone" required>
        
        <button type="submit">שלח</button>
        <div id="responseBox"></div>
    </form>

    <script>
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

            fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
                method: 'POST',
                headers: {
                    'apiKey': '0dd58bfc-3069-4ea2-b722-c7aa0a9b300f',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then(response => {
                if (!response.ok) {
                    return response.json().then(err => {
                        throw new Error(err.message || `HTTP error! status: ${response.status}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                responseBox.style.display = 'block';
                responseBox.innerHTML = `תשובה מהשרת:\n${JSON.stringify(data, null, 2)}`;
            })
            .catch(error => {
                console.error('Error:', error);
                responseBox.style.display = 'block';
                responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p>\n${error.message}`;
            });
        });
    </script>
</body>
</html>
