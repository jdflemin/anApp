#!/usr/bin/env node

// DEREK
/*
write function(s) to hand PERT math
 */

// Justin
/*
write user input criteria
*/

// Enter number of years to save 
// Enter lump sum of savings
// Enter interest rate in whole percents (ie 1 for 1%)

console.log("Kill Me Plz");

function pertCalc(principle, years, interestRate) {

    var convInterest = interestRate / 100;
    var total = principle * Math.exp(convInterest * years);
    return total;
}
console.log(pertCalc(100, 2, 5));
