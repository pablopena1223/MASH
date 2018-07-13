function mash(){
    return "You will live in a " + getHome() + ", and you will have " + getChildrenCount() + " kids!";

}


console.log(mash());

function getHome(){
    const places = ["Mansion","Apartment","Shack","House"];
    const randomValue = Math.floor(Math.random() * places.length);
    return places[randomValue];
}

console.log(getHome());

function getChildrenCount(){
   const decimal = Math.random();
   const times100 = decimal * 100; 
   const final = Math.floor(times100);
   return(final);
}

console.log(getChildrenCount());