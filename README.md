<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <style>
        body {
            background-color: #1F1F1F; /* צבע רקע כהה יותר עם גוון מודרני */
            color: #E0E0E0; /* צבע טקסט אפור בהיר */
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* פונטים מודרניים */
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        h1 {
            color: #FFDD57;
            text-align: center;
        }

        form {
            background-color: #2C2C2C; /* צבע רקע ניגודיות נמוכה */
            padding: 30px;
            border-radius: 10px; /* פינות מעוגלות */
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* צללים עדינים */
            max-width: 400px;
            width: 100%;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
        }

        input {
            background-color: #3A3A3A; /* צבע רקע לשדות קלט */
            color: #FFFFFF;
            border: none;
            padding: 12px;
            margin-bottom: 20px;
            border-radius: 5px; /* פינות מעוגלות לשדות קלט */
            width: 100%;
            box-sizing: border-box;
        }

        button {
            background-color: #FFDD57; /* צבע רקע לכפתור */
            color: #000;
            border: none;
            padding: 15px;
            border-radius: 5px; /* פינות מעוגלות לכפתור */
            width: 100%;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease; /* אנימציה למעבר עכבר */
        }

        button:hover {
            background-color: #E5C54F; /* שינוי צבע רקע במעבר עכבר */
        }

        #responseBox {
            margin-top: 20px;
            padding: 20px;
            border-radius: 5px;
            background-color: #292929; /* צבע רקע לתיבת התגובה */
            color: #FFDD57;
            width: 100%;
            display: none;
            white-space: pre-wrap;
        }
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
