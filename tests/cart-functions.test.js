const { removeItem } = require("../src/js/cart-functions");
const cartFunc = require("../src/js/cart-functions");




describe("calculateChange", () => {
  test("Total 5 - payment 6 - returns 1", () => {
    expect(cartFunc.calculateChange(5,6)).toEqual(1)
  });

  test("Total 12.30 - payment 13.03 - returns 0.73", () => {
    expect(cartFunc.calculateChange(12.30, 13.03)).toBeCloseTo(0.73)
  });

  test("Total 20 - payment 37 - returns 17", () => {
    expect(cartFunc.calculateChange(20, 37)).toBeCloseTo(17)
  });

});

describe("isSufficientPayment", () => {
  test("Given total 5 and payment 6 it returns true",() => {
    expect(cartFunc.isSufficientPayment(5,6)).toEqual(true)
  })

  test("Given total 10 and payment 7 it returns false",() => {
    expect(cartFunc.isSufficientPayment(10,7)).toEqual(false)
  })

  test("Given total 3 and payment 3 it returns true",() => {
    expect(cartFunc.isSufficientPayment(3,3)).toEqual(true)
  })

  test("Given total 115 and payment 2 it returns true",() => {
    expect(cartFunc.isSufficientPayment(115, 2)).toEqual(false)
  })

});

describe("calculateTotal", () => {
  test("one item priced 4.99 returns 4.99", () => {
    expect(cartFunc.calculateTotal([{name: "jelly", price: 4.99}])).toBeCloseTo(4.99)
  });

  test("three items prices 3.50, 12.99, 0.03 returns 16.52", () => {
    expect(cartFunc.calculateTotal([
      {name: "jelly", price: 3.50},
      {name:"Ground turkey", price:12.99},
      {name:"misc", price: 0.03}])).toBeCloseTo(16.52)
  });


  test("empty array returns 0", () => {
    expect(cartFunc.calculateTotal(0))
  })

  test("two items prices 3.50, 12.99 returns 16.49", () => {
    expect(cartFunc.calculateTotal([
      {name: "jelly", price: 3.50},
      {name:"Ground turkey", price:12.99}])).toBeCloseTo(16.49)
  });


});

describe("addItem", () => {
  test("processing an empty array adds one item", () =>{
    let results = [];  //set up an empty array
    cartFunc.addItem(results, "Beans", 3.)//call function to modify array
    expect(results).toEqual([{name:"Beans", price: 3}])
  })

  test("processing an 1 array adds one item to be 2 items in array", () =>{
    let results = [{name:"Beans", price: 3}];  //set up an empty array
    cartFunc.addItem(results, "Sugar", 2)//call function to modify array
    expect(results).toEqual([{name:"Beans", price: 3},{name:"Sugar", price: 2}])
  })

  test("processing a 2 item array adds one item to be 3 item array", () =>{
    let results = [{name:"Beans", price: 3},{name:"Sugar", price: 2}];  //set up an empty array
    cartFunc.addItem(results, "Pork", 15)//call function to modify array
    expect(results).toEqual([{name:"Beans", price: 3},{name:"Sugar", price: 2},{name:"Pork", price: 15}])
  })

});

describe("removeItem", () => {
  test("Remove the index 0 list item from an array of 3 items", () => { //writing inside the test because we don't have to return anything in the function.
    let results = [{name:"Beans", price: 3},{name:"Sugar", price: 2},{name:"Pork", price: 15}];
    cartFunc.removeItem(results, 0) //Call function to modify the array
    expect(results).toEqual([{name:"Sugar", price: 2},{name:"Pork", price: 15}])
  });

  test("Remove the last index item from an array of 3 items", () => {
    let results = [{name:"Beans", price: 3},{name:"Sugar", price: 2},{name:"Pork", price: 15}];
    cartFunc.removeItem(results, 2)
    expect(results).toEqual([{name:"Beans", price: 3},{name:"Sugar", price: 2}])
  });

  test("Remove the middle index item from an array of 3 items", () => {
    let results = [{name:"Beans", price: 3},{name:"Sugar", price: 2},{name:"Pork", price: 15}];
    cartFunc.removeItem(results, 1)
    expect(results).toEqual([{name:"Beans", price: 3},{name:"Pork", price: 15}])
  });

  test("Remove the only index item from an array of 1 items", () => {
    let results = [{name:"Beans", price: 3}];
    cartFunc.removeItem(results, 0)
    expect(results).toEqual([])
  });

});