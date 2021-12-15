function formatCurrency(amount) {
    let dollars = amount.toFixed(2)
    if(amount >= 0){
        return "$" + dollars
    }
    else {
        dollars = dollars * -1;
        dollars = amount.toFixed(2);
        amount = "$" + dollars;
        return amount;
    
    }
}




function getCoins()

module.exports = {
    formatCurrency:formatCurrency,

}