console.log("client side javascript is loaded!");

fetch("http://localhost:1234/weather?address=!").then((response) => {
  response.json().then((data) => {
    if(data.error) return console.log(data.error)
    console.log(data.location)
    console.log(data.forecast)
  })
})