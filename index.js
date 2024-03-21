// Write your solution in this fil
var customerName = 'bob';
function upperCaseCustomerName () {
 customerName= customerName.toUpperCase()
}
 function setBestCustomer() {
  bestCustomer ='not bob';
 }

 function overwriteBestCustomer() {
    bestCustomer='maybe bob';
 } 
 const leastFavoriteCustomer = 'steve';
// Write a function that attempts to change that constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
  // Attempting to change the constant will result in an error.
  leastFavoriteCustomer = 'bob'; // This line will throw a TypeError because you cannot reassign a constant.
}

