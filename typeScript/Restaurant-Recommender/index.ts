import restaurants from "./restaurants";

const dollarSigns = "$$";
const deliveryTimeMax = 90;
const maxDistance = 10;
const hour: number = new Date().getHours();
let result;

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (Number(restaurant.deliveryTimeMinutes > deliveryTimeMax)) {
    return false;
  }

  if (Number(restaurant.distance) > maxDistance) {
    return false;
  }

  return restaurant;
});
//At the top of index.ts, declare a variable named hour with a value of new Date().getHours(). The getHours method will return the current hour in 24 hour UTC time. Then annotate this variable with the correct type.
if (filteredRestaurants.length === 0) {
  result = "There are no restaurants available right now.";
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
