'use strict';
let salesStore = document.getElementById('SalesByLocation');
let homePage = document.getElementById('main');
let table = document.querySelector('table')

let allStores = [];
let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function StoreList(storeName, minCust, maxCust, avgSales) {
  this.storeName = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;

  this.custPerHr = 0;
  this.cookiesPerHr = [];
  this.totalCookies = 0;
  allStores.push(this);
}

StoreList.prototype.custHR = function () {
  let custHR= Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  return custHR;
};

StoreList.prototype.cookHR = function () {
  for (let i = 0; i < storeHours.length; i++) {
    let cookHR = this.avgSales * this.cookHR();
    this.cookiesPerHr.push(Math.ceil(cookHR));
    this.totalCookies += Math.ceil(cookHR);
  }
};

StoreList.prototype.render = function(){
  let tableHead = document.createElement('th');
  h2el.textContent = allStores;
  table.appendChild(tableHead);
  let tableRowOne = document.createElement('tr');
  table.appendChild(tableRowOne);
}


new StoreList('Seattle', 23, 64, 6.3)
new StoreList('Tokyo', 3, 24, 1.2)
new StoreList('Dubai', 11, 38, 3.7)
new StoreList('Paris', 20, 38, 2.3)
new StoreList('Lima', 2, 16, 4.6)