

curl -X POST -H "content-type:application/json" "http://localhost:8080/" --data '{ "id": 0, "data": { "city": "Austin"} }'

Response Error Details
HTTP CodeError CodeDescription
400
Request had bad syntax or the parameters supplied were invalid

401
Unauthorized. API authorization failed

403
Unauthorized. You do not have permission to access this endpoint

404
Server has not found a route matching the given URI

500
Server encountered an unexpected condition which prevented it from fulfilling the request



https://developer.accuweather.com/apis

Use Locations API call to get location key, to use for Current Conditions API
LOCATIONKEY FOR AUSTIN: 
"Key": "351193",
*Successfully called API for ATX weather conditions at accuweather dev
*May have found a solution for alarms, WEATHER ALARMS API allows to set alerts:
https://developer.accuweather.com/accuweather-weather-alarms-api/apis

Endpoint for Austin from Locations API= {351193}




walkthrough api:

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={ APIKEY }

endpoint='weather'
q='boston'
appid='apiKey'










Testnet and Mainnet options for AccuWeather/Link contract:
Mainnets: Eth, Matic, Arbitrum
Testnets: ONLY KOVAN

Ethereum Kovan Testnet
Payment Amount: 0.1 LINK
LINK Token Address: 0xa36085F69e2889c224210F603D836748e7dC0088
Oracle Address: 0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd

JobIDs:
location-current-conditions: 7c276986e23b4b1c990d8659bca7a9d0
current-conditions: 0ef6e60880e24cb69cb99a1cad76f15a
location:d67df9cb479e4b2e897f2769d1b0ff8e

