const apiKey = "https://api.openweathermap.org/data/2.5/weather?lat=37.53609444&lon=126.9675222&appid=1678d5fbe5655c5df4baca85f98cc3ed"

async function main(){
    const data = await fetch(apiKey);
    const gggg = await data.json();
    const wind = gggg.wind.speed;
    const K = gggg.main.feels_like;
    const H = gggg.main.humidity;

    let win = document.getElementById("wind");
    let h = document.getElementById("H");
    let k = document.getElementById("K");

    h.innerHTML = "<div>"+gggg.main.humidity + "</div>"
    


}

