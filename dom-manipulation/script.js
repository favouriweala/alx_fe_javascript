// Quotes array (
const quotes = [
  { text: "Consistency is the key to success", category: "Motivation" },
  { text: "Love conquers all", category: "Love" },
  { text: "Time waits for no man", category: "Wisdom" }
];

//Function to display a random quote (global)
function displayRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");

  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<p>No quote available</p>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  quoteDisplay.innerHTML = `<p>"${randomQuote.text}"</p>
  <small>- ${randomQuote.category}</small>`;
}

//Function to add a new quote (global)
function addQuote() {
  const quoteInput = document.getElementById("newQuoteText");
  const categoryInput = document.getElementById("newQuoteCategory");

  const text = quoteInput.value.trim();
  const category = categoryInput.value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote);       
    quoteInput.value = "";      
    categoryInput.value = "";    
    displayRandomQuote();        
    alert("Quote added successfully!");
  }
   else {
    alert("Please fill in both fields");
  }
}

// Event listener for “Show New Quote” button
document.getElementById("newQuote")
        .addEventListener("click", displayRandomQuote);
