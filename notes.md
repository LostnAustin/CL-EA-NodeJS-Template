to run, 
1. export the API_KEY from terminal
2. yarn start
3. from separate terminal:

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



from market.link, Found the Iron Node Kovan OpenMaps price feed
https://market.link/adapters/4b215858-a2c3-44ab-92ec-9e1e980da537





walkthrough api:

https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={ APIKEY }

endpoint='weather'
q='boston'
appid='apiKey'


link API external adapter tutorial: https://www.youtube.com/watch?v=65NhO5xxSZc&t=0s







<!-- 
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


 -->

