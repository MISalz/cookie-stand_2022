'use strict';
let salesStore = document.getElementById('SalesByLocation');
let homePage = document.getElementById('main');

// let stores = [seattle, tokyo, dubai, paris, lima]

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

console.log('im alive!')
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Seattle Location  */
/////////////////////////////////////////////////////////////////////////////////////////////////////
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
    }
  },

  calCookiesHR: function () {
    this.calCustHR()
    for (let i = 0; i < storeHours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookiesPerDay += (this.cookiesPerHour[i]);
    }
  },
}

seattle.render = function () {
  this.calCookiesHR()
  let h2El = document.createElement('h2');
  h2El.textContent = this.location;
  salesStore.appendChild(h2El);

  let ulEl = document.createElement('ul')
  salesStore.appendChild(ulEl);
  
  for (let i = 0; i < storeHours.length; i++) {
    let cookies = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`
    let li = document.createElement('li');
    li.textContent = cookies;
    salesStore.appendChild(li);
  }

}

seattle.render();
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Tokyo Location  */
/////////////////////////////////////////////////////////////////////////////////////////////////////
let tokyo = {
  location: 'Tokyo',
  hours: storeHours,
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calCookiesHR: function () {
    this.calCustHR()
    for (let i = 0; i < storeHours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookiesPerDay += (this.cookiesPerHour[i]);
    }
  },
}

tokyo.render = function () {
  this.calCookiesHR()
  let h2El = document.createElement('h2');
  h2El.textContent = this.location;
  salesStore.appendChild(h2El);

  let ulEl = document.createElement('ul')
  salesStore.appendChild(ulEl);

  for (let i = 0; i < storeHours.length; i++) {
    let cookies = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`
    let li = document.createElement('li');
    li.textContent = cookies;
    salesStore.appendChild(li);
  }
}
tokyo.render();
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Dubai Location  */
/////////////////////////////////////////////////////////////////////////////////////////////////////
let dubai = {
  location: 'Dubai',
  hours: storeHours,
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calCookiesHR: function () {
    this.calCustHR()
    for (let i = 0; i < storeHours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookiesPerDay += (this.cookiesPerHour[i]);
    }
  },
}

dubai.render = function () {
  this.calCookiesHR()
  let h2El = document.createElement('h2');
  h2El.textContent = this.location;
  salesStore.appendChild(h2El);

  let ulEl = document.createElement('ul')
  salesStore.appendChild(ulEl);

  for (let i = 0; i < storeHours.length; i++) {
    let cookies = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`
    let li = document.createElement('li');
    li.textContent = cookies;
    salesStore.appendChild(li);
  }
}

dubai.render();
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Paris Location  */
/////////////////////////////////////////////////////////////////////////////////////////////////////
let paris = {
  location: 'Paris',
  hours: storeHours,
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calCookiesHR: function () {
    this.calCustHR()
    for (let i = 0; i < storeHours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookiesPerDay += (this.cookiesPerHour[i]);
    }
  },
}
paris.render = function () {
  this.calCookiesHR()
  let h2El = document.createElement('h2');
  h2El.textContent = this.location;
  salesStore.appendChild(h2El);

  let ulEl = document.createElement('ul')
  salesStore.appendChild(ulEl);

  for (let i = 0; i < storeHours.length; i++) {
    let cookies = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`
    let li = document.createElement('li');
    li.textContent = cookies;
    salesStore.appendChild(li);
  }
}

paris.render();
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* Lima Location  */
/////////////////////////////////////////////////////////////////////////////////////////////////////
let lima = {
  location: 'Lima',
  hours: storeHours,
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: [],
  cookiesPerHour: [],
  totalCookiesPerDay: 0,
  calCustHR: function () {
    for (let i = 0; i < storeHours.length; i++) {
      this.custPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust));
    }
  },
  calCookiesHR: function () {
    this.calCustHR()
    for (let i = 0; i < storeHours.length; i++) {
      this.cookiesPerHour.push(Math.ceil(this.custPerHour[i] * this.avgCookieSale));
      this.totalCookiesPerDay += (this.cookiesPerHour[i]);
    }
  },
}
lima.render = function () {
  this.calCookiesHR()
  let h2El = document.createElement('h2');
  h2El.textContent = this.location;
  salesStore.appendChild(h2El);

  let ulEl = document.createElement('ul')
  salesStore.appendChild(ulEl);

  for (let i = 0; i < storeHours.length; i++) {
    let cookies = `${this.hours[i]}: ${this.cookiesPerHour[i]} cookies`
    let li = document.createElement('li');
    li.textContent = cookies;
    salesStore.appendChild(li);
  }
}
lima.render();



