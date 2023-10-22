let diff, obj;

document.querySelector("#ID").onsubmit = Company

const IDs = []

function Company(){
  const CompanyID =  document.querySelector('#CompanyID')
  console.log(CompanyID.value)
  // Adds to Array
  IDs.push(CompanyID.value)
  // Resets CompanyID
  CompanyID.value = ""
  console.log(IDs)
  return false
}

// Fetches data from API for today's date
function FindData(){
  IDs.map(function(element){
    
    fetch(`https://the-value-crew.github.io/nepse-api/data/company/${element}.json`)
    
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Assuming the API returns JSON data
      return response.json(); 
    })
    .then(data => {
      // Process the data from the API for today's date
      console.log('Data from the latest API endpoints:');

      keyarray = Object.keys(data)
      keyarraylen = keyarray.length
      obj = data[keyarray[keyarraylen - 1]]
      diff = obj["price"]["diff"]
      console.log(diff)
      console.log(obj)
      document.querySelector(".output").innerText = diff
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation for today:', error);
    });
  })  
}