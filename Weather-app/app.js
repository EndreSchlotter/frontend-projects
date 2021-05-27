window.addEventListener('load', () => {
    let long;
    let lat;
    let weatherDescription = document.querySelector('.weather-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let iconDescription;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.ambeedata.com/weather/latest/by-lat-lng?lat=${lat}&lng=${long}`;

            fetch(api, {
                "method": "GET",
                "headers": {
                    "x-api-key": "Tchyd8dLY9scX2iSwaz9GM4W1g23lU30yRfeY1i0",
                    "Content-type": "application/json"
                }
            })
                .then(resp => {
                    return resp.json();
                })
                .then(weatherData => {
                    const { temperature, cloudCover } = weatherData.data;
                    //Set DOM elements from the API
                    temperatureDegree.textContent = ((temperature - 32) / 1.8).toFixed(1); // converting fahrenheit to celsius
                    function weather() {
                        if (cloudCover < 0.125) {
                            weatherDescription.textContent = "Sunny";
                            iconDescription = 'CLEAR-DAY';
                        } if (0.125 < cloudCover > 0.35) {
                            weatherDescription.textContent = "Mostly sunny";
                            iconDescription = 'CLEAR-DAY';
                        } if (0.35 < cloudCover < 0.625) {
                            weatherDescription.textContent = "Partly cloudy";
                            iconDescription = 'PARTLY_CLOUDY_DAY';
                        } else {
                            weatherDescription.textContent = "Cloudy";
                            iconDescription = 'CLOUDY';
                        }
                    }
                    weather();

                    setIcons(iconDescription, document.querySelector('.icon'))
                });
        });
    }

    function setIcons(iconDescription, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = iconDescription;
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});
