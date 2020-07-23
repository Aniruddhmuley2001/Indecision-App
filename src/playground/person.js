export{ isAdult, canDrink, isSeniorCitizen as default }

const isAdult = (x) => x >= 18
const canDrink = (x) => x >= 21
const isSeniorCitizen = (x) => x >= 60

console.log('person.js is running');