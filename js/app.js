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


let storeHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let seattle = {
  location: 'Seattle',
  hours: storeHours,
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour:[],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.custPerHour.push(Math.floor(Math.random()*(this.minCust-this.maxCust+1)+this.minCust));
      }
  },
  calCookiesHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.cookiesPerHour.push(Math.ceil(this.custPerHour[i]*this.avgCookieSale));
  this.totalCookiesPerDay += (this.cookiesPerHour[i]);
      }
  },
}
let tokyo = {
  location: 'Tokyo',
  hours: storeHours,
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour:[],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.custPerHour.push(Math.floor(Math.random()*(this.minCust-this.maxCust+1)+this.minCust));
      }
  },
  calCookiesHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.cookiesPerHour.push(Math.ceil(this.custPerHour[i]*this.avgCookieSale));
  this.totalCookiesPerDay += (this.cookiesPerHour[i]);
      }
  },
}
let dubai = {
  location: 'Dubai',
  hours: storeHours,
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHour:[],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.custPerHour.push(Math.floor(Math.random()*(this.minCust-this.maxCust+1)+this.minCust));
      }
  },
  calCookiesHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.cookiesPerHour.push(Math.ceil(this.custPerHour[i]*this.avgCookieSale));
  this.totalCookiesPerDay += (this.cookiesPerHour[i]);
      }
  },
}
let paris = {
  location: 'Paris',
  hours: storeHours,
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour:[],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.custPerHour.push(Math.floor(Math.random()*(this.minCust-this.maxCust+1)+this.minCust));
      }
  },
  calCookiesHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.cookiesPerHour.push(Math.ceil(this.custPerHour[i]*this.avgCookieSale));
  this.totalCookiesPerDay += (this.cookiesPerHour[i]);
      }
  },
}
let lima = {
  location: 'Lima',
  hours: storeHours,
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour:[],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.custPerHour.push(Math.floor(Math.random()*(this.minCust-this.maxCust+1)+this.minCust));
      }
  },
  calCookiesHR: function(){
    for(let i = 0; i <storeHours.length; i++){
  this.cookiesPerHour.push(Math.ceil(this.custPerHour[i]*this.avgCookieSale));
  this.totalCookiesPerDay += (this.cookiesPerHour[i]);
      }
  },
}


let salesStore = document.getElementById('SalesByLocation');

seattle.render = function(){
  let h2El = document.createElement('h2');
  h2El.textContent = seattle.location;
  salesStore.appendChild(h2El);
}
seattle.render();

