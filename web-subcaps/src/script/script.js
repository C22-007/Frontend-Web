const apiKey = 'c7db216723c9073b5bb5613a64ca697d';
const baseUrl = 'https://api.themoviedb.org/3';

const getData = () => {
    const data = [];
    fetch(`${baseUrl}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            console.log(responseJson);
        })
        .catch();
}