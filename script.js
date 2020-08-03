
const apiKey = "3df4ba7918b7098d79cea665ee9157e2";
const inputVal = input.value;
 
 
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${3df4ba7918b7098d79cea665ee9157e2}&units=metric`;

// ajax response

fetch(url)
.then(response => response.json())
.then(data => {
  // do stuff with the data
})
.catch(() => {
  msg.textContent = "Please search for a valid city ";
});