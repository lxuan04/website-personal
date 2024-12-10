// Get elements
const btn = document.querySelector(".btn");
const message = document.querySelector("#message");

// Function to generate hearts
function generateHearts() {
  const heart = document.createElement("div");
  heart.textContent = "❤";
  heart.classList.add("heart");
  document.body.appendChild(heart);

  // Randomize size and position
  heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
  heart.style.left = `${Math.random() * 100}%`;

  // Remove heart after animation
  setTimeout(() => heart.remove(), 3000);
}

// Trigger hearts and update message on button click
btn.addEventListener("click", () => {
  // Generate hearts
  const interval = setInterval(generateHearts, 200); // Generate hearts every 200ms

  // Stop hearts after 5 seconds
  setTimeout(() => clearInterval(interval), 5000);

  // Change button text for a moment
  btn.textContent = "Terima Kasih Sayang!";
  setTimeout(() => (btn.textContent = "Klik untuk melanjutkan"), 5000);

  // Change the paragraph to a romantic thank-you message
  message.innerHTML = `
        Terima kasih telah menjadi bagian terbaik dalam hidupku, Lilis.  
        Senyummu adalah alasanku untuk bahagia setiap hari. Aku beruntung memiliki kamu!  
        Cintaku untukmu akan selalu seperti matahari yang tak pernah lelah bersinar. ❤  
    `;
});
