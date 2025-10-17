//  Quotes array
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

//  Function to display a random quote 
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

// Function to add a new quote 
function createAddQuoteForm() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote); 

    // Display the last added quote
    displayedQuote.innerHTML = `<p>"${newQuote.text}"</p>
    <small>- ${newQuote.category}</small>`;

    // Clear inputs
    newQuoteText.value = "";
    newQuoteCategory.value = "";

    alert("Quote added successfully!");
  } else {
    alert("Please fill in both fields");
  }
}

// Event listener for "Show New Quote" button
quoteButton.addEventListener("click", showRandomQuote);
