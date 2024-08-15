<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <!-- סגנון לחלק תיבת התגובה -->
    <style>
        #responseBox {
            margin-top: 20px; /* רווח למעלה */
            padding: 10px;    /* ריפוד פנימי */
            border: 1px solid #000; /* מסגרת שחורה */
            width: 300px;    /* רוחב התיבה */
            height: 150px;   /* גובה התיבה */
            overflow: auto;  /* גלילה אוטומטית במקרה של תוכן גדול */
            display: none;   /* התיבה מוסתרת כברירת מחדל */
        }
    </style>
</head>
<body>
    <h1>טופס הרשמה</h1>
    <!-- טופס הרשמה -->
    <form id="registrationForm">
        <label for="first_name">שם פרטי:</label><br>
        <input type="text" id="first_name" name="first_name" required><br><br>
        
        <label for="last_name">שם משפחה:</label><br>
        <input type="text" id="last_name" name="last_name" required><br><br>
        
        <label for="email">כתובת מייל:</label><br>
        <input type="email" id="email" name="email" required><br><br>
        
        <button type="submit">שלח</button> <!-- כפתור שליחה -->
    </form>

    <!-- תיבת התגובה שבה תוצג התשובה מהשרת -->
    <div id="responseBox"></div>

    <!-- JavaScript לשליחת הטופס ולטיפול בתגובות -->
    <script>
        // מאזין לאירוע "submit" של הטופס
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // מונע את שליחת הטופס בצורה הרגילה

            const formData = new FormData(this); // יוצר אובייקט FormData מהטופס
            const responseBox = document.getElementById('responseBox'); // תיבת התגובה שבה נשתמש להציג את התגובה מהשרת

            // שליחת בקשת POST ל-API עם נתוני הטופס
            fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json().then(data => ({
                status: response.status,  // קוד הסטטוס של התגובה
                body: data                // התוכן של התגובה בפורמט JSON
            })))
            .then(res => {
                responseBox.style.display = 'block'; // מציג את תיבת התגובה
                if (res.status >= 200 && res.status < 300) { // בודק אם קוד הסטטוס הוא בטווח של הצלחה
                    responseBox.innerHTML = `<p>המתעניין נוצר בהצלחה!</p><pre>${JSON.stringify(res.body, null, 2)}</pre>`;
                } else { // כל קוד אחר מציין שגיאה
                    responseBox.innerHTML = `<p>משהו השתבש. אנא נסה שוב.</p><pre>${JSON.stringify(res.body, null, 2)}</pre>`;
                }
            })
            .catch(error => { // מטפל בשגיאות ברשת או בשגיאות אחרות במהלך הביצוע
                console.error('Error:', error);
                responseBox.style.display = 'block'; // מציג את תיבת התגובה
                responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p><pre>${error}</pre>`;
            });
        });
    </script>
</body>
</html>
