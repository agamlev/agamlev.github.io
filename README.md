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

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            padding: 50px 20px;
        }

        .card {
            background: #1e1e1e;
            border-radius: 15px;
            padding: 30px;
            margin: 20px;
            width: 300px;
            height: 250px;
            text-align: center;
            transition: transform 0.5s ease, box-shadow 0.5s ease;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
            position: relative;
            overflow: hidden;
        }

        .card:hover {
            transform: translateY(-10px) rotateZ(3deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.8);
        }

        .card::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: rgba(255, 221, 87, 0.1);
            transition: transform 0.5s ease;
            transform-origin: center;
            transform: rotate(45deg);
        }

        .card:hover::before {
            transform: rotate(90deg);
        }

        .card h2 {
            font-size: 1.8rem;
            margin-bottom: 15px;
            color: #FFDD57;
        }

        .card p {
            font-size: 1rem;
            line-height: 1.5;
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
        }

        .btn:hover {
            background-color: #FFC700;
            transform: translateY(-5px);
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
    <h1>ברוכים הבאים לאתר מודרני</h1>
    <div class="container">
        <div class="card">
            <h2>כרטיס 1</h2>
            <p>תוכן אינטראקטיבי ומעניין לכרטיס 1.</p>
            <button class="btn">גלה עוד</button>
        </div>
        <div class="card">
            <h2>כרטיס 2</h2>
            <p>תוכן אינטראקטיבי ומעניין לכרטיס 2.</p>
            <button class="btn">גלה עוד</button>
        </div>
        <div class="card">
            <h2>כרטיס 3</h2>
            <p>תוכן אינטראקטיבי ומעניין לכרטיס 3.</p>
            <button class="btn">גלה עוד</button>
        </div>
    </div>
    <div class="circle"></div>
    <div class="scroll-down">גלול למטה</div>
</body>
</html>
