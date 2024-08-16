<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <link rel="stylesheet" href="styles.css">
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

    <script src="script.js"></script>
</body>
</html>
