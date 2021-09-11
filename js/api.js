// api key
const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('weather', temperature.weather[0].main);

    //set weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    console.log(iconUrl);
    const icon = document.getElementById('icon');
    icon.setAttribute('src', iconUrl);

    //set background
    const iconUrl = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    console.log(iconUrl);
    const icon = document.getElementById('icon');
    icon.setAttribute('src', iconUrl);
}