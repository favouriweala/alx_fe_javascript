document.addEventListener("DOMContentLoaded", function() {

  // Initial quotes
  const quotes = [
    { text: "Consistency is the key to success", category: "Motivation" },
    { text: "Love conquers all", category: "Love" },
    { text: "Time waits for no man", category: "Wisdom" }
  ];

  // DOM elements
  const displayedQuote = document.getElementById("quoteDisplay");
  const quoteButton = document.getElementById("newQuote");
  const newQuoteText = document.getElementById("newQuoteText");
  const newQuoteCategory = document.getElementById("newQuoteCategory");

  // Function to show a random quote
  function showRandomQuote() {
    if (quotes.length === 0) {
      displayedQuote.innerHTML = "<p>No quote available</p>";
      return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    displayedQuote.innerHTML = `<p>"${randomQuote.text}"</p>
    <small>- ${randomQuote.category}</small>`;
  }

  // Event listener for "Show New Quote" button
  quoteButton.addEventListener("click", showRandomQuote);

  // Function to add a new quote
  window.addQuote = function() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (text && category) {
      const newQuote = { text, category };
      quotes.push(newQuote); 
      newQuoteText.value = "";
      newQuoteCategory.value = "";

      alert("Quote added successfully!");
      showRandomQuote(); 
    } else {
      alert("Please fill in both fields");
    }
  };

});
