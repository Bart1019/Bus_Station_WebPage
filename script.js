//Home Page 

const wrapper = document.querySelector(".wrapper");
const hamburgerMenu = document.querySelector("ul i");

hamburgerMenu.addEventListener('click', function() {
    wrapper.classList.toggle("off");
})

//Schedules Page
const arrivals = document.querySelector(".tableHeader div:last-of-type");
const departures = document.querySelector(".tableHeader div:first-of-type");
var arrivalsTable = document.querySelectorAll(".arrivals");
var departuresTable = document.querySelectorAll(".departures");

arrivals.addEventListener('click', function() {   
    arrivalsTable.forEach(element => {
        element.classList.toggle("off");
    });
})

departures.addEventListener('click', function() {
    departuresTable.forEach(element => {
        element.classList.toggle("off");
    });
})
