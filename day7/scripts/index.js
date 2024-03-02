let countries = [
    {
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": ["Pashto", "Dari"],
        "currencies": {
            "AFN": {
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        }
    },
    {
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "languages": ["Swedish"],
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        }
    },
    {
        "name": "Albania",
        "capital": "Tirana",
        "languages": ["Albanian"],
        "currencies": {
            "ALL": {
                "name": "Albanian lek",
                "symbol": "L"
            }
        }
    },
    {
        "name": "Algeria",
        "capital": "Algiers",
        "languages": ["Arabic"],
        "currencies": {
            "DZD": {
                "name": "Algerian dinar",
                "symbol": "د.ج"
            }
        }
    },
    {
        "name": "American Samoa",
        "capital": "Pago Pago",
        "languages": ["English", "Samoan"],
        "currencies": {
            "USD": {
                "name": "United State Dollar",
                "symbol": "$"
            }
        }
    },
    {
        "name": "Andorra",
        "capital": "Andorra la Vella",
        "languages": ["Catalan"],
        "currencies": {
            "USD": {
                "name": "Euro",
                "symbol": "€"
            }
        }
    },
    {
        "name": "Angola",
        "capital": "Luanda",
        "languages": ["Portuguese"],
        "currencies": {
            "AOA": {
                "name": "Angolan kwanza",
                "symbol": "Kz"
            }
        }
    },
    {
        "name": "Anguilla",
        "capital": "The Valley",
        "languages": ["English"],
        "currencies": {
            "XCD": {
                "name": "East Caribbean dollar",
                "symbol": "$"
            }
        }
    },
    {
        "name": "Antarctica",
        "capital": "",
        "languages": ["English", "Russian"],
        "currencies": {
            "AQD": {
                "name": "Antarctican dollar",
                "symbol": "A$"
            }
        }
    },
];

// countries.forEach(country => {
//     if (Object.keys(country.currencies).includes('USD')) {
//         console.log(country.name);
//     }
// });

let usdCountries = countries.filter(country => Object.keys(country.currencies).includes('USD'));

console.log(usdCountries);