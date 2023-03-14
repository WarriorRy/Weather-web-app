const currlocation = document.getElementById("currlocation");
const datetime = document.getElementById("datetime");
const status = document.getElementById("status");
const temperature = document.getElementById("temperature");
const statimg = document.getElementById("statimg");
const humidity = document.getElementById("humidity");
const precipitation = document.getElementById("precipitation");
const co = document.getElementById("co");
const no2 = document.getElementById("no2");
const o3 = document.getElementById("o3");
const so2 = document.getElementById("so2");
const pm10 = document.getElementById("pm10");
const pm2_5 = document.getElementById("pm2_5");
const getweather = async() => {
    const api = "https://api.weatherapi.com/v1/current.json?key=66e06147e8c844ebb2b142242231403&q=Mumbai&aqi=yes";
    try{
        let data = await fetch(api);
        let realData = await data.json();
        currlocation.innerHTML = `${realData.location.name}, ${realData.location.region}, ${realData.location.country}`;
        status.innerHTML = `${realData.current.condition['text']}`;
        datetime.innerHTML = `${realData.location.localtime}`;
        temperature.innerHTML = `${realData.current.temp_c} &deg; C`;
        statimg.src = "https:"+realData.current.condition['icon'];
        humidity.innerHTML = `Humidity: ${realData.current.humidity}%`;
        precipitation.innerHTML = `Precipitation: ${realData.current.precip_mm}mm`;
        co.innerHTML = `CO: ${realData.current.air_quality['co'].toFixed(3)}`; 
        no2.innerHTML = `NO<sub>2</sub>: ${realData.current.air_quality['no2'].toFixed(3)}`;
        o3.innerHTML = `O<sub>3</sub>: ${realData.current.air_quality['o3'].toFixed(3)}`;
        so2.innerHTML = `SO<sub>2</sub>: ${realData.current.air_quality['so2'].toFixed(3)}`;
        pm10.innerHTML = `PM10: ${realData.current.air_quality['pm10'].toFixed(3)}`;
        pm2_5.innerHTML = `PM2.5: ${realData.current.air_quality['pm2_5'].toFixed(3)}`;
    } catch(error){
        console.log(error);
    }
};

getweather();