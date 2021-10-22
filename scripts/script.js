let apiKey = "f8b0c3339f525b8aa0c957672f2d77af";
let userCity = document.getElementById("cities"); 
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${apiKey}`){
    .then ((response))
}
