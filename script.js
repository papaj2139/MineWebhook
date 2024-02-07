function sendMessage() {
    const webhookUrl = document.getElementById("webhookUrl").value;
    const messageContent = document.getElementById("messageContent").value;
  
    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ content: messageContent })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
      console.log("Message sent successfully!");
    })
    .catch(error => {
      console.error("Error sending message:", error);
    });
  }
  