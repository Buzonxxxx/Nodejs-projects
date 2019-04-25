console.log("client side javascript is loaded!");

const weatherForm = document.querySelector("form")
const searchValue = document.querySelector("input")
const messageOne = document.querySelector("#location")
const messageTwo = document.querySelector("#forecast")

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = searchValue.value;
  messageOne.textContent = "Loading..."
  messageTwo.textContent = ""
  fetch(`http://localhost:1234/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } 
      else {
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
      }
    })
  })
})