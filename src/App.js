import React,{ useState } from "react";
import { StatusBar } from 'react-native';
import Select from "react-select";
import WeatherCard from "./Weathercard";
import { formatApiResults } from "./util";


const api = {
  key: "ENTER API KEY HERE",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const[weather, setWeather] = useState([]);

  const options = [
    {value:'634963', label:'Tampere'},
    {value:'655195', label:'Jyväskylä'},
    {value:'650225', label:'Kuopio'},
    {value:'660129', label:'Espoo'}
  ]

  function handleChange(selectedOptions){
    setWeather([])
    selectedOptions.map(selectedOption => {      
    var value = selectedOption.value;
    fetch(`${api.base}forecast?id=${value}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(prev => prev.concat(formatApiResults(result)));
      })
      return('');
    })
  }

  return (
    <div className="App">
      <StatusBar backgroundColor = "#00A5E5"/>
      <header className="app-header">
        <div>Säätutka</div>
      </header>
      <main>
        <div>
          <div className="select">
            <Select options={options} onChange={handleChange} isMulti={true}/>
          </div>         
            {(weather || []).map(w => w ? (<div key={w.location}><WeatherCard weather={w}/></div>) : <div/>
          )}
        </div>
      </main>
    </div>
    
  );
}

export default App;
