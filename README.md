<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
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

    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // מונע את שליחת הטופס בצורה הרגילה

            const formData = new FormData(this);

            fetch('https://api.arboxapp.com/index.php/api/v2/leads', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    alert('המתעניין נוצר בהצלחה!');
                } else {
                    alert('משהו השתבש. אנא נסה שוב.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('אירעה שגיאה בעת שליחת הטופס.');
            });
        });
    </script>
</body>
</html>
