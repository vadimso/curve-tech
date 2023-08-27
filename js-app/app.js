// app.js
window.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const userIPElement = document.getElementById('userIP');
    const hostIPElement = document.getElementById('hostIP');
    const targetURLElement = document.getElementById('targetURL');

    // Get user's IP address
    fetch('https://api64.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            userIPElement.textContent = userIP;

            // Get host's IP address
            fetch('/host-ip') // You need to set up a server route to handle this request
                .then(response => response.json())
                .then(hostData => {
                    const hostIP = hostData.hostIP;
                    hostIPElement.textContent = hostIP;

                    // Display greeting
                    const greeting = `Hello user! You came from host IP: ${hostIP}`;
                    greetingElement.textContent = greeting;

                    // Set target URL
                    const targetURL = `http://${hostIP}/your-target-url`;
                    targetURLElement.href = targetURL;
                });
        });
});

