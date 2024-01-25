var readlinesync = require('readline-sync')
var hotel = require('./region.json')
var toDo = readlinesync.question("woudld you like the list of hotels")
module.export = class hotel{



    constructor (name) {
    
        this.name = name
    
    
    }
    
    showPlaces() {
        var i, len, text
        for (i = 0, len = hotels.length, text = ""; i < len; i++ ){
            text += i + 1 + ": " + hotel[i].title + " (Age " + films[i].ageRating + "+)\n"
        }
         return text
                     
    }
    under18 () {
        var filteredHotel = hotels.filter(films => hotels.ageRating <= this.age)
        return this.mySolution(filteredHotel)
     }
    
    
    }

if(toDo == "yes"){


}else{

var showme = hotels.showAllPlaces()



}
var townsData = [
    { name: "Dublin", North:"Vivian Khordad hotel" },
    { name: "Kerry", South: "Minato Jules hotel" },
    { name: "Wexford", North: "Darby Jyoti hotel" },
    // This is where the places and hotels are gonna be placed
];

// This is an unordered list element
var townList = document.createElement("ul");

// This will Loop through the townsData array and create list items for each town
for (var i = 0; i < townsData.length; i++) {
    var town = townsData[i];

    // This is a list item for each town
    var listItem = document.createElement("li");
    listItem.textContent = town.name + " - North: ", "- South" + town.Direction;
    // Append the list item to the unordered list
    townList.appendChild(listItem);
}

// Append the unordered list to the body of the document or another container element
document.body.appendChild(townList);
var hotelRegion = readlinesync.question("What region would you like to stay North or South.")