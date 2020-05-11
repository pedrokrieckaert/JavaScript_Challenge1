var days = 300; //The longest travel time to mars.
var endDate = new Date(2021, 2, 6); //300 days from 10/5/2020, the day I started creating this code
var diffDate = Math.floor((endDate.getTime() - Date.now()) / (1000 * 3600 * 24)); //The difference between the current time and the end date in days
var daysPast = (diffDate - days) * -1;

//Random values to be used in the functions
var shipData = {
    fuel: 2500,
    food: 100000,
    water: 100000000
}

//An event trigger for when the document has loaded.
document.addEventListener('DOMContentLoaded', (event) => {
    travelDays();
    updateFuel();
    updateFood()
    updateWater();
})

//Displays the remain time of the journey
function travelDays(){
    var elem = document.getElementById("daysLeft");  
    elem.innerHTML = Math.floor(diffDate);
}

//Calculates fuel by a percentage required for the total days
//This is then converted to a percentage to be used for CSS
function updateFuel(){
    var elem = document.getElementById("fuelMeter");
    var data = shipData.fuel - ((shipData.fuel / days) * daysPast);

    elem.style.width = Math.floor((data/shipData.fuel)*100) + "%";
    elem.innerHTML = elem.style.width;
}

//Similair to the function above except for a hard code change
//To make the final screen more interesting, the total food value is inflated by 2000
function updateFood(){
    var elem = document.getElementById("foodMeter");
    var data = shipData.food - ((shipData.food / days) * daysPast);

    elem.style.width = Math.floor((data/(shipData.food + 2000)) *100) + "%";
    elem.innerHTML =   elem.style.width;
}

//Same as the food function
function updateWater(){
    var elem = document.getElementById("waterMeter");
    var data = shipData.water - ((shipData.water / days) * daysPast);

    elem.style.width = Math.floor((data/(shipData.water + 700000)) *100) + "%";
    elem.innerHTML = elem.style.width;
}