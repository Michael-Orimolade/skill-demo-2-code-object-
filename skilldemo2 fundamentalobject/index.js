var hotels = require('./region.json');

var readline = require('readline-sync');

class HotelApplication {

   constructor(hotels) {
     this.hotels = hotels;

 }
 listAllTowns() {
 //this is to list all the towns we have hotels in
   console.log("This are all the towns we have an hotel in :");
   this.hotels.forEach(hotel => {
   console.log(` we have an hotel in ${hotel.town}`);

 });

  }

 listHotelsByRegion(region) {
 console.log(`List of hotels in ${region} Ireland:`);
 var  filterHotels = this.hotels.filter(hotel => {
  return hotel.region.toLowerCase() === region.toLowerCase();

   });
  filterHotels.forEach(hotel => {
    console.log(`Town: ${hotel.town}, Hotel Name: ${hotel.name}`);

   });
   }

}
var hotelApp = new HotelApplication(hotels);
// List  of all towns and hotels
hotelApp.listAllTowns();
// List of hotels in a specific region based on the user input t
var hotelsRegion = readline.question("What region would you like to stay in, North or South? ");
hotelApp.listHotelsByRegion(hotelsRegion);
