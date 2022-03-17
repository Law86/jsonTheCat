const fs = require('fs');
const request = require('request');

const breedName = process.argv[2]
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`

request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
        return console.log("You are not able to access the link.")
    }
    const breed = data[0]
    if (breed) {
        console.log(breed.description)

    } else {
        console.log("Failed to find the breed!")
    }

});