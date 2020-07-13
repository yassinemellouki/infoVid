import { API_ROUTES, API_KEY, ISO_COUNTRY_INFO, COUNTRY_FLAG, COUNTRY_INFO } from "./Config";
import moment from 'moment';
import * as Location from 'expo-location';
import { isoCountries } from "./Helpers";
import { Country, isoCountry } from 'iso-country';


const requestParams = {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": API_KEY, 
	    }
    };

const deviceLocation = async (type) => {
          const { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          }
          const location = await Location.getCurrentPositionAsync();
          const address = await Location.reverseGeocodeAsync(location.coords);
            if(type === "geolocation") {
                    return {latitude, longitude}
            }
            return address; 
}

const fetchCountries = async () => {

    let response = await fetch(API_ROUTES.COUNTRIES.uri, requestParams)

    let data = await response.json();
    let countries = data.response.map((response) => {
        if(isoCountry(response)){
            let countryDetails = isoCountry(response);
            return {name: countryDetails.localName, apiName: response, isoCode: isoCountries[countryDetails.localName]};
        }

        return {name: response, apiName: response, isoCode: isoCountries[response]};
    }) 

    countries.sort((a, b) => {
        if( a.name > b.name ) {
            return 1;
        }else {
            return -1;
        }
    })
    return countries;
}

const fetchCountryStatistics = async (country) => {
    let response = await fetch(API_ROUTES.STATISTICS.uri + country, requestParams)
    let data = await response.json();
    let CountryStatistics = data;
    if(CountryStatistics.response.length > 0){
        return data;
    }else {
        // if it ISO2 fetch ISO3
        let iso3Code = await fetchCountryISO3(isoCountries[country])
        let data = fetchCountryStatistics(iso3Code);
        return data;
    }

}

const fetchCountryHistory = async (country) => {


    function dateFormat(date) {

        let splitedDate = date.split('/');
        let m = splitedDate[0];
        let d = splitedDate[1];
        let y = splitedDate[2];

        return `${y}-${m}-${d}`
    }


    async function generatePrevDaysData(country) {
        let countryName;
        const prevDaysCount = 12;
        let i = 0;
        let currentDate;

        if(country === "United States") {
            countryName = "USA";
        }
        else {
            countryName = country;
        }

        let activeCasesHistory = [];
        let newCasesHistory = [];
        let recoveredCasesHistory = [];
        let totalCasesHistory = [];
        let newDeathsHistory = [];

        do {

            let currentDate = moment().subtract(i, 'days').format('L');

            let date = dateFormat(currentDate);

            const response = await fetch(API_ROUTES.BASE.uri + 'history?day=' + date + '&country=' + countryName , requestParams)
            const data = await response.json();

            if(!data.response[0]){
                console.log("data")
                console.log(data)
                return null 
                break;
            }

            const activeCases = data.response[0].cases.active;
            const newCases = data.response[0].cases.new;
            const recoveredCases = data.response[0].cases.recovered;
            const totalCases = data.response[0].cases.total;
            const newDeaths = data.response[0].deaths.new;

            activeCasesHistory.unshift(activeCases);
            newCasesHistory.unshift(newCases);
            recoveredCasesHistory.unshift(recoveredCases);
            totalCasesHistory.unshift(totalCases);
            newDeathsHistory.unshift(newDeaths);
            
            i++;

        } while (i < prevDaysCount)

        return { activeCasesHistory, newCasesHistory, recoveredCasesHistory, totalCasesHistory, totalCasesHistory, newDeathsHistory };

    }
    return generatePrevDaysData(country);


}

// Fetch country iso3 from iso2
const fetchCountryISO3 = async (isoCode) => {
    let response = await fetch(ISO_COUNTRY_INFO + isoCode + '?format=json');
    let data = await response.json();
    let  countryISO3 = data[1][0]["id"];
    return countryISO3

}

// Fetch country geoLocation from country name
const fetchCountryGFromName = async (countryName) => {
    const geoLocation = await RequestsCountryInfo(countryName, 'geolocation')
    return geoLocation;
}

const fetchCountryISO2FromName = async (country) => {

    const iso2 = await RequestsCountryInfo(country, 'iso2')

    return iso2;

}
const countryFlag = async (country) => {
    
    let countryIso3 = await fetchCountryISO2FromName(country)

    return (COUNTRY_FLAG + countryIso3 + API_ROUTES.FLAG_STYLE.uri);
}


// Function Retruned data
function Returns(data, country, toReturn) {
    if(toReturn === 'geolocation') {

        if(data.status !== 404) {
            return data[0]["latlng"];
        }else {
            return {};
        }

    }else if(toReturn === "iso2") {

        /*
        if(country === "United States"){
            return data[1].alpha2Code;
        }    
        */

        return data[0].alpha2Code;
    }
}

// Request to Country Info
const RequestsCountryInfo = async (countryName, toReturn) => {

    // Request 1
    let  req1 = await fetch(COUNTRY_INFO + encodeURI(countryName.replace(/-/g, " "))+ "?fullText=true");

    // Request 2
    let req2 = await fetch(COUNTRY_INFO + encodeURI(countryName.replace(/-/g, " ")));

    // Request 3
    let splitedName;
    let createdIsoCode = [];
    if(countryName.includes('-')){
        splitedName = countryName.split('-')
        splitedName.forEach((sn) => {
                createdIsoCode.push(sn[0]);
        })
    }

    createdIsoCode = createdIsoCode.toString().replace(/,/g, "");

    let i = 0;
    let character = '';
    let createdIsoCode2 = [];
    while (i <= countryName.length){
        character = countryName.charAt(i);
        if (character == character.toUpperCase() && character !== '-' && character !== ' ') {
            createdIsoCode2.push(character)     
        }
        i++;
    }

    createdIsoCode2  = createdIsoCode2.toString().replace(/,/g, "");


    let req3 = await fetch(COUNTRY_INFO + createdIsoCode2 + "?fullName=true");

    const reqs = [req1, req2, req3];

    for( i=0 ; i < reqs.length; i++) {
        let response = await reqs[i];
        if(response.ok){
            let data = await response.json()
            return Returns(data, countryName, toReturn)
            break;
        }
    }

}

export { deviceLocation, fetchCountries, fetchCountryStatistics, fetchCountryISO3, fetchCountryGFromName, fetchCountryHistory, countryFlag}
