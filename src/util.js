export function formatApiResults(result){
    var wantedWeather = {
        date: new Date(),
        location: result?.city?.name,
        current: {
            icon: result?.list?.[0]?.weather?.[0]?.icon,
            temp: result?.list?.[0]?.main?.temp,
            wind: result?.list?.[0]?.wind?.speed,
            humid: result?.list?.[0]?.main?.humidity,
            rain: result?.list?.[0]?.rain?.['3h'],
            desc: result?.list?.[0]?.weather?.[0]?.description,
        },
        future: {},      
    };
    
    for (let i = 1; i < 6; i++) {
        wantedWeather.future[result?.list?.[i]?.dt_txt] = {
            icon: result?.list?.[i]?.weather?.[0]?.icon,
            temp: result?.list?.[i]?.main?.temp,
            wind: result?.list?.[i]?.wind?.speed,
            humid: result?.list?.[i]?.main?.humidity,
            rain: result?.list?.[i]?.rain?.['3h'],
        }
      }

    return wantedWeather;
}

export function dateBuilder(d) {
    let months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    let date = d.getDate();
    let month = months[d.getMonth()];
    return `${month} ${date}`
  }

export function formatTime(time){
    if (!time || time.length < 19) return "--:--"
    return time.substr(11,5)
}
