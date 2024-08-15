<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <style>
        body {
            background-color: #121212; /* צבע רקע שחור כהה */
            color: #FFFFFF; /* צבע טקסט לבן לקריאה טובה יותר */
            font-family: Arial, sans-serif; /* משפחת פונטים כללית */
        }

        #responseBox {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #000;
            background-color: #0A0A0A; /* צבע רקע שחור בהיר יותר לתיבת התגובה */
            color: #FFFFFF; /* צבע טקסט לבן בתיבת התגובה */
            width: 1200px;
            height: 250px;
            overflow: auto;
            display: none;
        }

        input, button {
            background-color: #333333; /* צבע רקע לכפתורים ולשדות קלט */
            color: #FFFFFF; /* צבע טקסט לבן לכפתורים ולשדות קלט */
            border: 1px solid #555555; /* מסגרת כהה לשדות קלט */
            padding: 10px;
            margin-bottom: 10px;
            width: 100%; /* כל שדה יתפרס על כל רוחב הקונטיינר */
        }

        label {
            color: #FFFFFF; /* צבע טקסט לבן לתוויות */
        }

        button {
            cursor: pointer;
        }

        button:hover {
            background-color: #444444; /* שינוי צבע רקע לכפתור במעבר עכבר */
        }
    </style>
</head>
<body>
    <h1>טופס הרשמה</h1>
    <form id="registrationForm">
        <label for="first_name">שם פרטי:</label><br>
        <input type="text" id="first_name" name="first_name" required><br><br>
        
        <label for="last_name">שם משפחה:</label><br>
        <input type="text" id="last_name" name="last_name" required><br><br>
        
        <label for="email">כתובת מייל:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="phone">טלפון:</label><br>
        <input type="tel" id="phone" name="phone" required><br><br>
        
        <button type="submit">שלח</button>
    </form>

    <div id="responseBox"></div>

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
                    if (response.status === 401) {
                        throw new Error('Unauthorized: API Key or credentials might be incorrect.');
                    } else {
                        throw new Error('HTTP error! status: ' + response.status);
                    }
                }
                return response.json();
            })
            .then(data => {
                responseBox.style.display = 'block';
                responseBox.innerHTML = `<pre>תשובה מהשרת: ${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                console.error('Error:', error);
                responseBox.style.display = 'block';
                responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p><pre>${error.message}</pre>`;
            });
        });
    </script>
</body>
</html>
