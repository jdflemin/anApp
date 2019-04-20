function windowPower(base,expnt){
    var endNumb = 0;
    
    if(expnt < 0){
        endNumb = negExpnt(base,expnt);
        return endNumb;
    }

    if (expnt == 0 && base != 0) {
        return 1;
    }

    if (expnt.includes('.')){
        newExpnt = parseDecimal(base, expnt);
    }

    for (i = 0; i <= expnt; i++) {

        if (i == 1) {
            endNumb = base;
        }
        else {
            endNumb *= base;
        }
    }
    return endNumb;
}
function negExpnt(base, expnt){
    var newExpnt = -1 * expnt;
    endNumb = 1 / windowPower(base, newExpnt);
    return endNumb;
}
function parseDecimal(base,expnt){
    let numerator = expnt;
    var denominator = 1;
    console.log(typeof numerator)
    while (numerator.includes('.')) {
        numerator *= 10;
        denominator*= 10;
        console.log(numerator);
        console.log(denominator);
        numerator += '';
    }
}

console.log(windowPower(5,'4.36'));