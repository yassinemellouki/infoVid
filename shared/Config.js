const API_URL = "https://covid-193.p.rapidapi.com";
const API_KEY = "654ef63021mshac1802cf04a205ap120fa4jsnd534f73000f1";
const ISO_COUNTRY_INFO = "http://api.worldbank.org/v2/country/" 
const COUNTRY_INFO = "https://restcountries.eu/rest/v2/name/" 
const COUNTRY_FLAG = "https://www.countryflags.io/";

const API_ROUTES = {
    BASE: {
        uri: API_URL + '/'
    },
    COUNTRIES: {
        uri: API_URL + '/countries'
    },
    STATISTICS: {
        uri: API_URL + '/statistics?country='
    },
    FLAG_STYLE: {
        uri: "/flat/64.png"
    }
}

export {API_URL, API_KEY, API_ROUTES, ISO_COUNTRY_INFO, COUNTRY_INFO, COUNTRY_FLAG}
