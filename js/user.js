function loginUser(event) {
    event.preventDefault(); // Prevent the form from submitting by default

    // AJAX request to submit the form data to login.php
    let formData = new FormData(document.getElementById('loginForm'));
    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        // If login is successful, show the welcome message
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
        document.getElementById('userName').textContent = data; // Assuming 'data' returned from PHP is the username
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        // Handle error (e.g., display an error message)
    });
}
