"use strict";
/*  Module 6: DGenerics in TypeScript
    Lab Start */
/*  DataStore is a utility function that can store up to 10 string values in an array.
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore {
    constructor() {
        this._data = new Array(10);
    }
    AddOrUpdate(index, item) {
        if (index >= 0 && index < 10) {
            this._data[index] = item;
        }
        else {
            alert('Index is greater than 10');
        }
    }
    GetData(index) {
        if (index >= 0 && index < 10) {
            return this._data[index];
        }
        else {
            return;
        }
    }
}
let cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(9, "London"); // item not added
console.log(cities.GetData(1)); // returns 'Chicago'
console.log(cities.GetData(12)); // returns 'undefined'
// TODO Test items as numbers.
let numbers = new DataStore();
numbers.AddOrUpdate(0, 50);
numbers.AddOrUpdate(1, 100);
numbers.AddOrUpdate(9, 100); // item not added
console.log(numbers.GetData(1)); // returns 100
console.log(numbers.GetData(12)); // returns 'undefined'
let pets = new DataStore();
pets.AddOrUpdate(0, { name: 'pet1', breed: 'breed1', age: 3 });
pets.AddOrUpdate(1, { name: 'pet2', breed: 'breed2', age: 5 });
pets.AddOrUpdate(9, { name: 'pet3', breed: 'breed3', age: 7 }); // item not added
console.log(pets.GetData(1)); // returns 100
console.log(pets.GetData(12)); // returns 'undefined'
