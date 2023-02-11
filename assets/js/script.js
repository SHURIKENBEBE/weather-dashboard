// const resultTextEl= document.querySelector('#result-text');
// const resultContentEl = document.querySelector('#result-content');
const searchFormEl = document.querySelector('#search-form');
// const cityInput = document.querySelector("#cityInput");

// const APIKey = "efa7bcfe54d304e0c4eb3fd375449809";
// const queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;






// async function getWeather(city) {
//   const geocodeResponse = await fetch(
//     `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKey}`
//   );
//   const geocodeData = await geocodeResponse.json();
//   const lat = geocodeData.lat;
//   const lon = geocodeData.lon;

//   const weatherResponse = await fetch(
//     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
//   );
//   const weatherData = await weatherResponse.json();

//   return weatherData;
// }

// getWeather("New York")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });



function getForecastData(){

    const APIKey = "efa7bcfe54d304e0c4eb3fd375449809";
    var city = document.querySelector("#cityInput");

    var cityURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // var city = document.querySelector("#cityInput");
    // var coordURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon="+ lon + "&appid=" + APIKey;

    async function getWeather(city) {
        const geocodeResponse = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${APIKey}`
        );
        const geocodeData = await geocodeResponse.json();
        const lat = geocodeData.lat;
        const lon = geocodeData.lon;
      
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APIKey}`
        );
        const weatherData = await weatherResponse.json();
      
        return weatherData;
      }
      
      getWeather("New York")
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });




    // fetch(queryURL)
    //     .then(function(response) {
    //         if(!response.ok){
    //             throw response.json();
    //         }

    //         return response.json();
    //         printResults();
    //     })
    //     .then(function (forecastRes){
    //         console.log(forecastRes);
    //     })
    //     .catch(function(error){
    //         console.error(error);
    //     })

}

getForecastData()



function printResults(resultObj){

    //setting up div containers to hold generated result
    resultCard = document.createElement('div');
    resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

     resultBody = document.createElement('div');
    resultBody.classList.add('card-body');
    resultCard.append(resultBody);

    //5 day forecast results container
     resultForecast = document.createElement('div');
    resultForecast.classList.add('forecast');

     titleEl = document.createElement('h4');
    titleEl.textContent = resultObj.title; 

     bodyContentEl = document.createElement('p');
    bodyContentEl.innerHTML = 
        'Date: ' + resultObj.date + '<br>';
    
    if (resultObj.subject){
        bodyContentEl.innerHTML +=
        "Today's weather is: " + resultObj.subject.join(', ') + '<br/>';
    } else{
        bodyContentEl.innerHTML +=
        'No forecast for this entry';
    }

    resultBody.append(titleEl, bodyContentEl);
    resultContentEl.append(resultCard);

}



function handleSearchFormSubmit(event){
    event.preventDefault();

    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-value').value;

    if(!searchInputVal){
        console.error('Please enter a city to generate forecast');
        return;
    }

    searchApi(searchInputVal, formatInputVal);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);
