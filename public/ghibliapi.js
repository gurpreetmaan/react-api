fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
        console.log(response, "response")
        return response.json()
    })
    .then((data) => {
        // Work with JSON data here
        console.log('data', data)
    })
    .catch((err) => {
        console.log("error");
        // Do something for an error here
    })