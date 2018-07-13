function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!" + " and you'll drive a " + getCar() ;

}


console.log(mash());

function getHome(){
    const places = ["Mansion","Apartment","Shack","House"];
    const randomPlace = Math.floor(Math.random() * places.length);
    return places[randomPlace];
}

console.log(getHome());

function getChildrenCount(){
   const decimal = Math.random();
   const times100 = decimal * 100; 
   const final = Math.floor(times100);
   return(final);
}

console.log(getChildrenCount());

function getCar(){
    const cars = ["Lambo","Box with wheels","Unicycle","Trash can"];
    const randomCar = Math.floor(Math.random() * cars.length);
    return cars[randomCar];
}