document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        location_box_fk: 279 // ודא ש-ID של קופסת המיקום נכון
    };

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
        responseBox.innerHTML = `תשובה מה-API של Arbox: ${JSON.stringify(data.arboxResponse, null, 2)}\n\n` +
                                `מקור ה-IP של השרת: ${data.serverIp}`;
    })
    .catch(error => {
        const responseBox = document.getElementById('responseBox');
        responseBox.style.display = 'block';
        responseBox.innerHTML = `<p>אירעה שגיאה בעת שליחת הטופס.</p>\n${error.message}`;
    });
});
 
