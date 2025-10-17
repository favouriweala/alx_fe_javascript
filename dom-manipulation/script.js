// Quotes array (global)
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

// Show a random quote using createElement and appendChild
function showRandomQuote() {
  displayedQuote.innerHTML = "";

  if (quotes.length === 0) {
    const noQuote = document.createElement("p");
    noQuote.textContent = "No quote available";
    displayedQuote.appendChild(noQuote);
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteText = document.createElement("p");
  quoteText.textContent = `"${randomQuote.text}"`;

  const quoteCategory = document.createElement("small");
  quoteCategory.textContent = `- ${randomQuote.category}`;

  displayedQuote.appendChild(quoteText);
  displayedQuote.appendChild(quoteCategory);
}

// Add a new quote dynamically
function createAddQuoteForm() {
  const text = newQuoteText.value.trim();
  const category = newQuoteCategory.value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote);

    // Clear previous display
    displayedQuote.innerHTML = "";

    // Display last added quote using createElement and appendChild
    const quoteText = document.createElement("p");
    quoteText.textContent = `"${newQuote.text}"`;

    const quoteCategory = document.createElement("small");
    quoteCategory.textContent = `- ${newQuote.category}`;

    displayedQuote.appendChild(quoteText);
    displayedQuote.appendChild(quoteCategory);

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
