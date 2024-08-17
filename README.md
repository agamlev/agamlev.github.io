<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <title>טופס הרשמה</title>
    <style>
        body {
            background: linear-gradient(135deg, #0F2027, #203A43, #2C5364); /* גרדיאנט רקע */
            color: #E0E0E0;
            font-family: 'Quicksand', sans-serif; /* פונט מודרני */
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
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

    <!-- טעינת קובץ ה-JavaScript -->
    <script src="backend.js"></script>
</body>
</html>
