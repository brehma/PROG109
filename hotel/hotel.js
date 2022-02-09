// Create the template for objects that are hotels
//function Hotel(name, rooms, booked) {
  //this.name = name;
  //this.rooms = rooms;
  //this.booked = booked;
  //this.checkAvailability = function() {
    //return this.rooms - this.booked;
  //};
//}

// Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
  function quayHotel(Quay, 40, 25) {
    this.name = Quay;
    this.rooms = 40;
    this.booked = 25;
    this.checkAvailability = function() {
      return this.rooms - this.booked;
    };
  }

var parkHotel = new Hotel('Park', 120, 77);
  function Hotel(Park, 120, 77) {
    this.name = Park;
    this.rooms = 120;
    this.booked = 77;
    this.checkAvailability = function() {
      return this.rooms - this.booked;
    };
  }

var sunsetHotel = new Hotel ('Sunset', 86, 10);
  function Hotel(Sunset, 86, 10) {
    this.name = Sunset;
    this.rooms = 86;
    this.booked = 10;
    this.checkAvailability = function() {
      return this.rooms - this.booked;
    };
  }

// Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
    details1 += quayHotel.checkAvailability();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
    details2 += parkHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

var details3 = sunsetHotel.name + ' rooms: ';
    details3 += sunsetHotel.checkAvailability();
var elHotel3 = document.getElementById('hotel3');
elHotel3.textContent = details3;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/
