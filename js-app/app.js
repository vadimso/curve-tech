document.addEventListener("DOMContentLoaded", function() {
  const greetingElement = document.getElementById("greeting");
  
  // Get user's IP address
  fetch('https://api64.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const userIP = data.ip;
      const hostIP = window.location.host;
      const targetURL = "http://.sandbox.curve.tech.com"; 
      
      const greetingMessage = `Hello user, you came from host IP: ${hostIP} and your target is ${targetURL}. Your IP address is: ${userIP}`;
      
      greetingElement.textContent = greetingMessage;
    })
    .catch(error => {
      console.error("Error fetching IP:", error);
      greetingElement.textContent = "An error occurred while fetching IP.";
    });
});

