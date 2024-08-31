async function messageSent() {
    const formData = {
        name: document.querySelector('input[placeholder="Name"]').value,
        email: document.querySelector('input[placeholder="Email"]').value,
        number: document.querySelector('input[placeholder="Number"]').value,
        message: document.querySelector('textarea[placeholder="Message"]').value,
    };

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
            document.getElementById('sentMessage').style.display = 'block';
            console.log(data.message);
        } else {
            console.error(data.error);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
