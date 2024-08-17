<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר אינטראקטיבי ומודרני</title>
    <style>
        body {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: linear-gradient(135deg, #0F2027, #203A43, #2C5364);
            color: #ffffff;
            overflow-x: hidden;
        }

        h1 {
            text-align: center;
            font-size: 3rem;
            margin-top: 20px;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #FFDD57;
            animation: fadeInDown 1s ease-in-out;
        }

        form {
            background-color: #1e1e1e;
            border-radius: 15px;
            padding: 30px;
            margin: 20px auto;
            width: 100%;
            max-width: 400px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
            animation: fadeInDown 1s ease-in-out;
        }

        form label {
            font-size: 1.2rem;
            color: #FFDD57;
            margin-bottom: 10px;
            display: block;
        }

        form input {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: none;
            font-size: 1rem;
            background-color: #3a3a3a;
            color: #ffffff;
        }

        .btn {
            background-color: #FFDD57;
            color: #121212;
            padding: 12px 25px;
            border-radius: 50px;
            border: none;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
            font-weight: bold;
            text-transform: uppercase;
            width: 100%;
        }

        .btn:hover {
            background-color: #FFC700;
            transform: translateY(-5px);
        }

        #responseBox {
            margin-top: 20px;
            padding: 20px;
            border-radius: 8px;
            background-color: #292929;
            color: #FFDD57;
            display: none;
            white-space: pre-wrap;
            font-size: 14px;
        }

        .circle {
            background-color: #ffdd57;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            position: absolute;
            top: -200px;
            left: 50%;
            transform: translateX(-50%);
            animation: float 4s infinite ease-in-out;
        }

        .scroll-down {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 18px;
            color: #ffdd57;
            animation: bounce 2s infinite;
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

        @keyframes float {
            0%, 100% {
                transform: translate(-50%, -10px);
            }
            50% {
                transform: translate(-50%, 10px);
            }
        }

        @keyframes bounce {
            0%, 100% {
                transform: translate(-50%, 0);
            }
            50% {
                transform: translate(-50%, -10px);
            }
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    </style>
</head>
<body>
    <div class="version-info" id="versionInfo">
        טוען גרסה...
    </div>

    <h1>ברוכים הבאים לאתר מודרני</h1>

    <form id="registrationForm">
        <label for="first_name">שם פרטי:</label>
        <input type="text" id="first_name" name="first_name" required>
        
        <label for="last_name">שם משפחה:</label>
        <input type="text" id="last_name" name="last_name" required>
        
        <label for="email">כתובת מייל:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">טלפון:</label>
        <input type="tel" id="phone" name="phone" required>
        
        <button class="btn" type="submit">שלח</button>
        <div id="responseBox"></div>
    </form>

    <div class="circle"></div>
    <div class="scroll-down">גלול למטה</div>

    <script>
        // פונקציה להצגת תאריך ושעה לפי שעון ישראל
        function updateVersionInfo() {
            const options = { timeZone: 'Asia/Jerusalem', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
            const israelTime = new Intl.DateTimeFormat('he-IL', options).format(new Date());
            const versionInfoElement = document.getElementById('versionInfo');
            versionInfoElement.innerHTML = `גרסה 1.0.3 - עודכן ב-${israelTime}`;
        }

        updateVersionInfo();

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = {
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                location_box_fk: 279 // ודא ש-ID של קופסת המיקום נכון
            };

            // שליחת הנתונים לשרת הפרוקסי (השרת שלך)
            fetch('/api/sendLead', {
                method: 'POST',
                headers: {
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
                responseBox.innerHTML = `תשובה מה-API של Arbox: ${JSON.stringify(data.arboxResponse, null, 2)}`;
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
