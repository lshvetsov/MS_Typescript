"use strict";
/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */
/*  EXERCISE 1 */
class BuildArray {
    // TODO Define the constructor
    constructor(items, sortingOrder) {
        // TODO Define the methods
        this.descending = (a, b) => {
            if (a > b) {
                return -1;
            }
            else if (b > a) {
                return 1;
            }
            else {
                return 0;
            }
        };
        this.ascending = (a, b) => {
            if (a > b) {
                return 1;
            }
            else if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        };
        this._items = items;
        this._sortingOrder = sortingOrder;
    }
    // TODO Define the accessors
    get items() {
        return this._items;
    }
    set items(items) {
        this._items = items;
    }
    get sortingOrder() {
        return this._sortingOrder;
    }
    set sortingOrder(sortingOrder) {
        this._sortingOrder = sortingOrder;
    }
    /*  buildArray builds an array of unique random numbers containing the number of items
    based on the number passed to it. The sortOrder parameter determines whether to sort
    the array in ascending or descending order. */
    buildArray() {
        let randomNumbers = [];
        let nextNumber;
        for (let counter = 0; counter < this._items; counter++) {
            nextNumber = Math.ceil(Math.random() * (100 - 1));
            if (randomNumbers.indexOf(nextNumber) === -1) {
                randomNumbers.push(nextNumber);
            }
            else {
                counter--;
            }
        }
        if (this._sortingOrder === 'ascending') {
            return randomNumbers.sort(this.ascending);
        }
        else {
            return randomNumbers.sort(this.descending);
        }
    }
}
/*  TODO: Instantiate the BuildArray objects. */
let testArray1 = new BuildArray(12, 'ascending');
let testArray2 = new BuildArray(8, 'descending');
console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
