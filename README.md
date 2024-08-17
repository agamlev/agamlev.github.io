<!DOCTYPE html>
<html lang="he">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>אתר אינטראקטיבי</title>
    <style>
        body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            overflow-x: hidden;
            background: #121212;
            color: #ffffff;
        }

        h1, h2 {
            text-align: center;
            margin-top: 20px;
        }

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 50px 0;
        }

        .card {
            background: #1e1e1e;
            border-radius: 10px;
            padding: 20px;
            margin: 15px;
            width: 250px;
            height: 200px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .card:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
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

        @keyframes float {
            0%, 100% {
                transform: translate(-50%, -10px);
            }
            50% {
                transform: translate(-50%, 10px);
            }
        }

        .btn {
            background-color: #ffdd57;
            color: #121212;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .btn:hover {
            background-color: #ffc700;
            transform: translateY(-3px);
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

        @keyframes bounce {
            0%, 100% {
                transform: translate(-50%, 0);
            }
            50% {
                transform: translate(-50%, -10px);
            }
        }
    </style>
</head>
<body>
    <h1>ברוכים הבאים לאתר אינטראקטיבי</h1>
    <div class="container">
        <div class="card">
            <h2>כרטיס 1</h2>
            <p>תוכן כרטיס 1</p>
            <button class="btn">לחץ כאן</button>
        </div>
        <div class="card">
            <h2>כרטיס 2</h2>
            <p>תוכן כרטיס 2</p>
            <button class="btn">לחץ כאן</button>
        </div>
        <div class="card">
            <h2>כרטיס 3</h2>
            <p>תוכן כרטיס 3</p>
            <button class="btn">לחץ כאן</button>
        </div>
    </div>
    <div class="circle"></div>
    <div class="scroll-down">גלול למטה</div>
</body>
</html>
