console.log("client side javascript is loaded!");

const weatherForm = document.querySelector("form")
const searchValue = document.querySelector("input")

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = searchValue.value;
  
  fetch(`http://localhost:1234/weather?address=${location}`).then((response) => {
  response.json().then((data) => {
    if (data.error) return console.log(data.error)
    console.log(data.location)
    console.log(data.forecast)
  })
})
})