module.exports = {
//this does all the math shit ya dig?
    pertCalc: function (principle, years, interestRate) {
        var convInterest = interestRate / 100;
        var total = principle * Math.exp(convInterest * years);
        return total;
    },
//annual rate, plz don't change this. it hurt me so much
    annualDeposits: function (p, y, r, c) {
        var rate = r / 100;
        var z = 1 + rate;
        var currentAmount = p * Math.pow(z,y) + c * ((Math.pow(z,y+1) - z)/(z - 1));    
        return currentAmount;
    }
}