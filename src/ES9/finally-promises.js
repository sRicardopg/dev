const promise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        //true o false
        resolve("promise resolved")
      } else {
        reject("promise rejected")
      }
    })
  }
  promise()
    .then(response => console.log(response)) // if it is resolved
    .catch(error => console.log(error)) //if it is rejected
    .finally(() => console.log("finished"))

//Keep in mind that promises are used when you have to wait for some that to be retrieved