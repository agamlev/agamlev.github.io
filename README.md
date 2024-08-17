<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <style>
        body {
            background: linear-gradient(135deg, #0F2027, #203A43, #2C5364);
            color: #E0E0E0;
            font-family: 'Quicksand', sans-serif;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            position: relative;
        }

        h1 {
            color: #FFDD57;
            text-align: center;
            margin-bottom: 20px;
            font-size: 32px;
        }

        form {
            background-color: #2C2C2C;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            max-width: 400px;
            width: 100%;
        }

        label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 14px;
        }

        input {
            background-color: #3A3A3A;
            color: #FFFFFF;
            border: none;
            padding: 14px;
            margin-bottom: 20px;
            border-radius: 8px;
            width: 100%;
            box-sizing: border-box;
            font-size: 16px;
        }

        button {
            background-color: #FFDD57;
            color: #000;
            border: none;
            padding: 15px;
            border-radius: 8px;
            width: 100%;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }

        #responseBox {
            margin-top: 20px;
            padding: 20px;
            border-radius: 8px;
            background-color: #292929;
            color: #FFDD57;
            width: 100%;
            display: none;
            white-space: pre-wrap;
            font-size: 14px;
        }

        .version-info {
            position: absolute;
            top: 10px;
            left: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            color: #FFDD57;
            padding: 5px 10px;
            border-radius: 5px;
            font-size: 14px;
            font-family: 'Arial', sans-serif;
        }
    </style>
</head>
<body>
    <div class="version-info" id="versionInfo">
        טוען גרסה...
    </div>

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
        // טעינת מידע הגרסה
        const versionInfoElement = document.getElementById('versionInfo');
        versionInfoElement.innerHTML = 'גרסה 1.0.3 - עודכן ב-2024-08-17 בשעה 15:32';

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                location_box_fk: 279 // ודא ש-ID של קופסת המיקום נכון
            };

            // שליחת הנתונים ישירות ל-API של Arbox
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
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                const responseBox = document.getElementById('responseBox');
                responseBox.style.display = 'block';
                responseBox.innerHTML = `תשובה מה-API של Arbox: ${JSON.stringify(data, null, 2)}`;
            })
            .catch(error => {
                const responseBox = document.getElementById('responseBox');
                responseBox.style.display = 'block';
                responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p>\n${error.message}`;
            });
        });
    </script>
</body>
</html>
