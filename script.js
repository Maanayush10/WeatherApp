const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e4acda5dd7msh315a3c69717abfcp14c703jsn3f4c60cfb45e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset

		})
		.catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
	e.preventDefault()
	getWeather(city.value);
})

//weather details for New York
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new%20york', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		NewYorkTemp.innerHTML = response.temp
		NewYorkHumidity.innerHTML = response.humidity
		NewYorkWS.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));

// weather deatils for London
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=london', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		LondonTemp.innerHTML = response.temp
		LondonHumidity.innerHTML = response.humidity
		LondonWS.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));

// weather deatils for Moscow
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=moscow', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		MoscowTemp.innerHTML = response.temp
		MoscowHumidity.innerHTML = response.humidity
		MoscowWS.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));


// weather deatils for Tokyo
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=tokyo', options)
	.then(response => response.json())
	.then(response => {
		console.log(response)

		TokyoTemp.innerHTML = response.temp
		TokyoHumidity.innerHTML = response.humidity
		TokyoWS.innerHTML = response.wind_speed

	})
	.catch(err => console.error(err));