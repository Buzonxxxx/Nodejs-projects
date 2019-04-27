const doWorkPromise = new Promise((resolved, reject) => {
  setTimeout(() => {
    // resolved("This is my result")
    reject("This is my error");
  }, 2000);
});

doWorkPromise
  .then(result => {
    console.log("Success!", result);
  })
  .catch(error => {
    console.log(error);
  });
