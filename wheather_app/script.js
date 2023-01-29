const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f6a30b22e6mshc4b19f0c5f6c88ap1af3f7jsn85cc496dbb1e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const temp=document.getElementById('temp')
const max_temp=document.getElementById('max_temp')
const min_temp=document.getElementById('min_temp')
const feels_like=document.getElementById('feels_like')
const sunrise=document.getElementById('sunrise')
const sunset=document.getElementById('sunset')
const humidity=document.getElementById('humidity')
const wind_degrees=document.getElementById('wind_degrees')
const wind_speed=document.getElementById('wind_speed')
const btn=document.getElementById('btn')
const city2=document.getElementById('city2')
const temp2=document.getElementById('temp2')
const humidity2=document.getElementById('humidity2')
const wind2=document.getElementById('wind2')
const kcpt=document.getElementById('kcpt')
const kfl=document.getElementById('kfl')
const khumidity=document.getElementById('khumidity')
const kmax_temp=document.getElementById('kmax_temp')
const kmin_temp=document.getElementById('kmin_temp')
const ksunrise=document.getElementById('ksunrise')
const ksunset=document.getElementById('ksunset')
const ktemp=document.getElementById('ktemp')
const kw_de=document.getElementById('kw_de')
const kspeed=document.getElementById('kspeed')

const k=(city)=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
        temp.innerHTML=response.temp
        max_temp.innerHTML=response.max_temp
        min_temp.innerHTML=response.min_temp
        feels_like.innerHTML=response.feels_like
        sunrise.innerHTML=response.sunrise
        sunset.innerHTML=response.sunset
        humidity.innerHTML=response.humidity
        wind_degrees.innerHTML=response.wind_degrees
        wind_speed.innerHTML=response.wind_speed
        temp2.innerHTML=response.temp
        humidity2.innerHTML=response.humidity
        wind2.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));
}

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kolkata', options)
	.then(response => response.json())
	.then(response =>{
        kcpt.innerHTML=response.cloud_pct
        kfl.innerHTML=response.feels_like
        ktemp.innerHTML=response.temp
        kmin_temp.innerHTML=response.min_temp
        kmax_temp.innerHTML=response.max_temp
        khumidity.innerHTML=response.humidity
        ksunrise.innerHTML=response.sunrise
        ksunset.innerHTML=response.sunset
        kw_de.innerHTML=response.wind_degrees
        kspeed.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
	.then(response => response.json())
	.then(response =>{
        dcpt.innerHTML=response.cloud_pct
        dfl.innerHTML=response.feels_like
        dtemp.innerHTML=response.temp
        dmin_temp.innerHTML=response.min_temp
        dmax_temp.innerHTML=response.max_temp
        dhumidity.innerHTML=response.humidity
        dsunrise.innerHTML=response.sunrise
        dsunset.innerHTML=response.sunset
        dw_de.innerHTML=response.wind_degrees
        dspeed.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=bengaluru', options)
	.then(response => response.json())
	.then(response =>{
        bcpt.innerHTML=response.cloud_pct
        bfl.innerHTML=response.feels_like
        btemp.innerHTML=response.temp
        bmin_temp.innerHTML=response.min_temp
        bmax_temp.innerHTML=response.max_temp
        bhumidity.innerHTML=response.humidity
        bsunrise.innerHTML=response.sunrise
        bsunset.innerHTML=response.sunset
        bw_de.innerHTML=response.wind_degrees
        bspeed.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=mumbai', options)
	.then(response => response.json())
	.then(response =>{
        mcpt.innerHTML=response.cloud_pct
        mfl.innerHTML=response.feels_like
        mtemp.innerHTML=response.temp
        mmin_temp.innerHTML=response.min_temp
        mmax_temp.innerHTML=response.max_temp
        mhumidity.innerHTML=response.humidity
        msunrise.innerHTML=response.sunrise
        msunset.innerHTML=response.sunset
        mw_de.innerHTML=response.wind_degrees
        mspeed.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=new york', options)
	.then(response => response.json())
	.then(response =>{
        ncpt.innerHTML=response.cloud_pct
        nfl.innerHTML=response.feels_like
        ntemp.innerHTML=response.temp
        nmin_temp.innerHTML=response.min_temp
        nmax_temp.innerHTML=response.max_temp
        nhumidity.innerHTML=response.humidity
        nsunrise.innerHTML=response.sunrise
        nsunset.innerHTML=response.sunset
        nw_de.innerHTML=response.wind_degrees
        nspeed.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=toronto', options)
	.then(response => response.json())
	.then(response =>{
        tcpt.innerHTML=response.cloud_pct
        tfl.innerHTML=response.feels_like
        ttemp.innerHTML=response.temp
        tmin_temp.innerHTML=response.min_temp
        tmax_temp.innerHTML=response.max_temp
        thumidity.innerHTML=response.humidity
        tsunrise.innerHTML=response.sunrise
        tsunset.innerHTML=response.sunset
        tw_de.innerHTML=response.wind_degrees
        tspeed.innerHTML=response.wind_speed
    } )
	.catch(err => console.error(err));
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    k(city.value)
    city2.innerHTML=city.value
})

k("delhi")
city2.innerHTML='Delhi'