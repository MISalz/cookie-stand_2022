'use strict';
let salesStore = document.getElementById('SalesByLocation');

// let stores = [seattle, tokyo, dubai, paris, lima]

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log('im alive!')

let seattle = {
  location: 'Seattle',
  hours: storeHours,
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
      console.log(this.custPerHour)
    }
  },

  calCookiesHR: function () {
    this.calCustHR()
    for (let i = 0; i < storeHours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookiesPerDay += (this.cookiesPerHour[i]);
      console.log(this.cookiesPerHour)
    }
  },
}

seattle.render = function () {
  let h2El = document.createElement('h2');
  h2El.textContent = this.location;
  salesStore.appendChild(h2El);

  let ulEl = document.createElement('ul')
  salesStore.appendChild(ulEl);

  let li = document.createElement('li');
  li.textContent = `${this.hours}: ${this.cookiesPerHour} cookies`;
  salesStore.appendChild(li);

}

seattle.render();

// let li = document.createElement('p');
// li.textContent = `Open between ${this.hours[0]} and ${this.hours[13]}`;
// salesStore.appendChild(li);
