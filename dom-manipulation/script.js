document.addEventListener("DOMContentLoaded", function() {
    // Load quote from local storage or use default ones
    const quotes = JSON.parse(localStorage.getItem("quotes")) || [
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

    sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));
  }
 

  // Add a new quote dynamically
  function createAddQuoteForm() {
    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim();

    if (text && category) {
      const newQuote = { text, category };
      quotes.push(newQuote);

      // update quote to localstorage
      localStorage.setItem("quotes", JSON.stringify(quotes));

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

  // Event listener for quote button
  quoteButton.addEventListener("click", showRandomQuote);

  window.addQuote = createAddQuoteForm;

   
  // Display last viewed quotes
  const lastQuote = JSON.parse(sessionStorage.getItem("lastViewedQuote"));
  if (lastQuote) {
    displayedQuote.innerHTML = `<p>"${lastQuote.text}"</p>
    <small>- ${lastQuote.category}</small>`;
  }
  else {
    showRandomQuote();
  }

  // function to download quote to a JSON file
  function exportToJsonFile() {
  const quoteArray = JSON.stringify(quotes, null, 2); 
  const blob = new Blob([quoteArray], { type: "application/json" }); 
  const url = URL.createObjectURL(blob);

  // Create a temporary link
  const a = document.createElement("a");
  a.href = url;
  a.download = "quotes.json";

  // Append link to document so click works in all browsers
  document.body.appendChild(a);
  a.click();

  // Clean up
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  alert("Quotes exported successfully!");
}


    // function to upload json file containing quotes
  function importFromJsonFile(event) {
    const fileReader = new FileReader();

    // read content
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);

      // function to save quotes
      saveQuotes();
      alert('Quotes imported successfully!');
    };
    
    // read file as text
    fileReader.readAsText(event.target.files[0]);
  }

});