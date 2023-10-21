// Fetches data from API
fetch('https://the-value-crew.github.io/nepse-api/data/date/latest.json')

.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Assuming the API returns JSON data
  })

  .then(data => {
    // Process the data from the API
    console.log(data);
  })

  // Checks if there is error
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


// Finds today's date
date = new Date();

// Changes data to tomorrows date, and re formatting
console.log(date.setDate(date.getDate() - 1))
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
console.log(date.toLocaleTimeString())

fetch(`https://the-value-crew.github.io/nepse-api/data/date/`)