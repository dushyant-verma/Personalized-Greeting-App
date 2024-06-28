//  Accessing the elements from html using dom manipulation

document.addEventListener("DOMContentLoaded", function () {
  const greetBtn = document.getElementById("greetBtn");

  const greetInput = document.getElementById("nameInput");
  const greetingMessage = document.getElementById("greetingMessage");

  // adding greeting functionality on the button

  greetBtn.addEventListener("click", function () {
    const name = nameInput.value.trim();

    if (name === "") {
      alert("Please enter your name.");
      return;
    }

    const greeting = `Hello, ${name}! Welcome to our website.`;
    greetingMessage.textContent = greeting;
    nameInput.value = ""; // clear in =put after displaying greeting
  });
});
