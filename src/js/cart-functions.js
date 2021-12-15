function calculateChange(total, payment){
    return payment - total
}


function isSufficientPayment(total, payment){
    return payment >= total; //this is a boolean expression so it can output both a true and false depending..
}


function calculateTotal(itemsArray){
    let total = 0
    for(let i = 0; i < itemsArray.length; i++){ //iterate through the items 
        total += itemsArray[i].price //add the price of each item to the "total" variable
    }
    return total  //return total
}


function addItem(itemsArray,name,price){
    itemsArray.push({name:name, price: price})

}

function removeItem(itemArray, index){
    itemArray.splice(index, 1)  //The second number is how many items we want to delete.
}


module.exports = {
    calculateChange:calculateChange,
    isSufficientPayment:isSufficientPayment,
    calculateTotal:calculateTotal,
    addItem:addItem,
    removeItem:removeItem
}