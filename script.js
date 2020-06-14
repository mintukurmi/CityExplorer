
// API vars
const API_COUNTRY = 'https://www.universal-tutorial.com/api/countries/';
const API_STATES = 'https://www.universal-tutorial.com/api/states/';
const API_CITIES = 'https://www.universal-tutorial.com/api/cities/';
const auth_token = "YOUR_AUTH_TOKEN";

// elements
const $countrySelect = document.querySelector('#countires');
const $stateSelect = document.querySelector('#states');
const $citySelect = document.querySelector('#cities');

// templtes
const countriesTemplate = document.querySelector('#countries-template').innerHTML;
const statesTemplate = document.querySelector('#states-template').innerHTML;
const citiesTemplate = document.querySelector('#cities-template').innerHTML;

// get access token function
function getAccessToken(email,accessToken){
    
    fetch('https://www.universal-tutorial.com/api/getaccesstoken', {
                    method: 'GET',
                    headers: {
                        "api-token": accessToken,
                        "user-email": email,
                        "Accept": "application/json"
                    }
                })
                .then(response => response.json())
                .then(data => {
                       console.log(data)
                });
     }


// load all countries function
function loadCountries(){

    fetch(API_COUNTRY, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${auth_token}`,            
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
        .then(countries => {

            const html = Mustache.render(countriesTemplate, { countries })
            $countrySelect.innerHTML = html;

        });
}

// load all states function
function loadStates(country){
    
    fetch(API_STATES + country, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${auth_token}`,
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(states => {
            // console.log(states)
            const html = Mustache.render(statesTemplate, { states })
            $stateSelect.innerHTML = html;

        });
}

// load all cities function
function loadCities(state) {

    fetch(API_CITIES + state, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${auth_token}`,
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(cities => {
            // console.log(cities)
            const html = Mustache.render(citiesTemplate, { cities })
            $citySelect.innerHTML = html;

        });
}
