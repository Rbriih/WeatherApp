import React from "react";
import { dateBuilder, formatTime } from "./util";

function ForecastBox({weather, time}){
    return (
    <div className="forecast-box">
    <div className="forecast">
        <div className="ftime"> {formatTime(time)}</div>
        <img className="ficon" alt='weathericon' src={"http://openweathermap.org/img/wn/" + weather.icon + "@2x.png"}/>
        <div className="ftemp"> {Math.round(weather.temp)} °C </div>
    </div>
    <div className="forecastdetails">
        <div className="fwind"> {weather.wind} m/s</div>
        <div className="fhumid"> {weather.humid} %</div>
        {(typeof weather.rain != 'undefined') ? (
        <div className="fpreci"> {weather.rain} mm</div>
        ) : (
            <div className="fperci">0 mm</div>
        )} 
    </div>
    </div> 
    )
}

function WeatherCard({weather}) {
    return (
        <div className="wholecard">
            <div className="container">
                <div className="location-box">
                    <div className="location">{weather.location}</div>
                    <div className="weatherdesc">{weather.current.desc}</div>
                    <div className="date">{dateBuilder(weather.date)}</div>
                    <div className="time">{weather.date.getHours()}:{weather.date.getMinutes()}</div>
                </div>
                <div className="weather-box">
                    <img className="icon" alt='weathericon' src={"http://openweathermap.org/img/wn/" + weather.current.icon + "@2x.png"}/>
                    <div className="temp">{Math.round(weather.current.temp)} °C</div>
                    <div className="wind">Wind: {weather.current.wind} m/s</div>
                    <div className="humid">Humidity: {weather.current.humid} %</div>
                    {(typeof weather.current.rain != 'undefined') ? (
                        <div className="perci">Precipitation (3h): {weather.current.rain} mm</div>
                    ) : (
                        <div className="perci">Precipitation (3h): 0 mm</div>
                    )} 
                    
                </div>
            </div>
            <div className="allfboxes">
                {Object.keys(weather.future).map(key => (
                    <div className='fbox' key={key}>
                        <ForecastBox weather={weather.future[key]} time={key}/>
                    </div>
                ))}
            </div>    
        </div>
    )
}

export default WeatherCard;