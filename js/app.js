'use strict';
//in object properties; JS object literals for each shop location

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer
// needs to calculate the number of cookies each location must make every day,The number of cookies to make depends on the hours of operation 
// Calculating the sum of these hourly totals; 
// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random


// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// that outputs the following to the sales.html file:
// Stores the min/max hourly customers
// average cookies per customer, 

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Display the values of each array as unordered lists in the browser


// let stores = ['Seattle', 'Tokyo','Dubai','Paris','Lima']
let storeHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm']


 let sales = document.getElementById('SalesByLocation');

let seattle = {
  location: 'Seattle',
  hours: storeHours,
  minCust:23,
  maxCust:65,
  avgCookieSale:6.3,
  avgCustPerHour:function(){
    for(let i=0, i < storeHours.length; i++){
      storeHours.length(custPerHour);

    }
  },
  cookiesPerHour:[],
  totalCookiesPerDay:[],

}

function custPerHour(min,max){
return Math.floor(Math.random()*(min-max+1)+min)
}

seattle.render= function(){
  let 
}