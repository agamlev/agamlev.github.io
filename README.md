<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <style>
        #responseBox {
            margin-top: 20px;
            padding: 10px;
            border: 1px solid #000;
            width: 300px;
            height: 150px;
            overflow: auto;
            display: none;
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
        
        <button type="submit">שלח</button>
    </form>

    <div id="responseBox"></div>

    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // מונע את שליחת הטופס בצורה הרגילה

            const formData = new FormData(this);
            const responseBox = document.getElementById('responseBox');

            fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json().then(data => ({
                status: response.status,
                body: data
            })))
            .then(res => {
                responseBox.style.display = 'block';
                if (res.status >= 200 && res.status < 300) {
                    responseBox.innerHTML = `<p>המתעניין נוצר בהצלחה!</p><pre>${JSON.stringify(res.body, null, 2)}</pre>`;
                } else {
                    responseBox.innerHTML = `<p>משהו השתבש. אנא נסה שוב.</p><pre>${JSON.stringify(res.body, null, 2)}</pre>`;
                }
            })
            .catch(error => {
                console.error('Error:', error);
                responseBox.style.display = 'block';
                responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p><pre>${error}</pre>`;
            });
        });
    </script>
</body>
</html>
