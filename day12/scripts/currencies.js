const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let countries = JSON.parse(xhr.responseText);
    
    let usdCountries = countries.filter(country => {
        if (country.currencies && Object.keys(country.currencies).includes('USD')) {
            return true;
        }
    });

    console.log(usdCountries.map(country => country.name.common).join('\n'));
}

xhr.send();