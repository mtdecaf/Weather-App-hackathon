let apiKey = "f8b0c3339f525b8aa0c957672f2d77af";
let meal = ["budae jjigue", "sushi", "BBQ"];
let drink = ["chai latte", "lemonade", "bubble tea"];
let dessert = ["creme brulee", "cheesecake", "icecream"];

let userCity = document.getElementById("cities"); 
let userPref = document.getElementById("foods");

// let decision = (temp, pref) =>{
//     if (temp<15 && pref === "meal"){
//         let lowTempMeal = 
// //         
// //         class Weather {
// //             constructor(){
// // 
// //             }
// //             render(){
// //                 return `
// //                     <p class="main__weather">
// //                         ${}
// //                     </p>
// //                 `
// //             }
// //         }
//     } else if ( temp<15 && pref === "drink"){
//         console.log(drink[0]);
//     } else if (temp<15 && pref === "dessert"){
//         console.log(dessert[0]);
//     } else if (temp>=15 && temp<=25 && pref === "meal"){
//         console.log(meal[1]);
//     } else if (temp>=15 && temp<=25 && pref === "drink"){
//         console.log(drink[1]);
//     } else if (temp>=15 && temp<=25 && pref === "dessert"){
//         console.log(dessert[1]);
//     } else if (temp>25 && pref === "meal"){
//         console.log(meal[2]);
//     } else if (temp>25 && pref === "drink"){
//         console.log(drink[2]);
//     } else if (temp>25 && pref === "dessert"){
//         console.log(dessert[2]);
//     }
//     
// };

const getWeather = (weather) =>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=${apiKey}`)
    .then ((weather) => {
        let currentWeather = weather.data.weather[0].main;
        let currentTemp = Math.round(weather.data.main.temp -273.15);
        decision(currentTemp, userPref);
    })
    .catch ((error) => {
        console.log(error);
    })
}

let form = document.querySelector(".main__form");

class Response{
    constructor(weather, temp, food){
        this.weather = weather;
        this.temp = temp;
        this.food = food;
    }

    render(){
        return `
            <h1 class="main__header">Weather report: </h1>
            <p class="main__weather">
            Cloudy
            </p>
            <p class="main__temp">
            9°C
            </p>
            <h1 class="main__header">Food recomendation for the weather:</h1>
            <p class="main__food">
            budae jjigue
            </p>
        `;
    };
}
let main = document.querySelector(".main__request-card");
let response = new Response ();
// main.innerHTML = response.render();



form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("HELLO");
    console.log(userCity.value);
    console.log(userPref.value);
    main.innerHTML = response.render();
})
// getWeather();
