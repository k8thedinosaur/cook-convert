// $(document).ready(function() {
 
// })

var measurement1 = prompt("What is your measurement?");

// var teaspoonToTablespoon = function(measurement1) {
//   var conversion = measurement1 / 3;
//   return conversion;
// };

// console.log(measurement1 + " teaspoons = " + teaspoonToTablespoon(measurement1) + " tablespoons");


var tablespoonToTeaspoon = function(measurement1) {
  var conversion = measurement1 * 3;
  return conversion;
};

console.log(measurement1 + " tablespoons = " + tablespoonToTeaspoon(measurement1) + " teaspoons");


// var teaspoonToCup = function(measurement1) {
//   var conversion = measurement * 48;
//   return conversion;
// }