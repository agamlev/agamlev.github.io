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
            overflow: hidden;
            position: relative;
        }

        h1 {
            color: #FFDD57;
            text-align: center;
            margin-bottom: 20px;
            font-size: 32px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        form {
            background-color: #2C2C2C;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            max-width: 400px;
            width: 100%;
            animation: fadeIn 1s ease-in-out;
            box-sizing: border-box;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
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
            transition: background-color 0.3s ease;
        }

        input:focus {
            background-color: #444444;
            outline: none;
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
            transition: transform 0.3s ease, background-color 0.3s ease;
        }

        button:hover {
            background-color: #E5C54F;
            transform: translateY(-3px);
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

        /* חלון מידע על המדינה */
        #countryInfo {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #2C2C2C;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
            color: #FFDD57;
            font-size: 16px;
            max-width: 200px;
            display: none; /* מוסתר כברירת מחדל */
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

    <!-- חלון מידע על המדינה -->
    <div id="countryInfo"></div>

    <!-- טוען את הסקריפט החיצוני -->
    <script src="backend.js"></script>
</body>
</html>
