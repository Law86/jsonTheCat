const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2]

fetchBreedDescription(breedName, (error, description) => {

    if (error) {
        console.log("error: ", error);
        return;
    } else {
        console.log("description: ", description)
    }
});