function mash(){
    return getHome();

}


console.log(mash());

function getHome(){
    const places = ["Mansion","Apartment","Shack","House"];
    const randomValue = Math.floor(Math.random() * places.length);
    return places[randomValue];
}

console.log(getHome());