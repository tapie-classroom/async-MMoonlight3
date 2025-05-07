const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat=37.53609444&lon=126.9675222&appid=1678d5fbe5655c5df4baca85f98cc3ed"

async function main(){
    const data = await fetch(apiKey);
    const gggg = await data.json();
    const wind = gggg.wind.speed;
    const K = gggg.main.feels_like;
    const H = gggg.main.humidity;
    const iconCode = gggg.weather[0].icon

    let win = document.getElementById("win");
    let h = document.getElementById("h");
    let k = document.getElementById("k");

    h.innerHTML = "<div>습도: " + H+ "%</div>";
    win.innerHTML = "<div>풍속: " + wind + " m/s</div>";
    k.innerHTML = "<div>체감 온도: " + ((K - 273.15).toFixed(1)) + "℃</div>";

    const iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
    icon.innerHTML = "<img src='" + iconUrl + "' alt='날씨 아이콘'>";

}

window.onload = main;