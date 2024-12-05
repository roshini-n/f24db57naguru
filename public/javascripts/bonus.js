document.addEventListener("DOMContentLoaded", () => {
    // Example: Add alert when clicking a card
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        alert("Relic clicked!");
      });
    });
  });
  