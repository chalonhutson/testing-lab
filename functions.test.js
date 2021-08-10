const { returnTwo, greeting, add, subtract, multiply, divide } = require("./functions");
const { expect, test } = require('@jest/globals');


describe("First tests.", ()=>{
    test("Should return the int two.", ()=>{expect(returnTwo()).toBe(2)});
    test("Should greet the person.", () => {expect(greeting("James")).toEqual("Hello, James.")});
    test("Should greet the person.", () => {expect(greeting("Jill")).toBe("Hello, Jill.")});
})

describe("Math operations.", ()=>{
    test("Should add up the numbers, yo!", ()=> {expect(add(1,2)).toEqual(3)});
    test("Should add up the numbers, yo!", ()=> {expect(add(5,9)).toBe(14)});
    test("Should subtract the numbers, yo!", ()=> {expect(subtract(10,9)).toBe(1)});
    test("Should multiply the numbers, yo!", ()=> {expect(multiply(10,9)).toBe(90)});
    test("Should divide the numbers, yo!", ()=> {expect(divide(10,2)).toBe(5)});
    test("Checks if add operation returns a number.", ()=> {expect(add(10,2)).not.toBeNaN()});
    test("Checks if subtract operation returns a number.", ()=> {expect(subtract(10,2)).not.toBeNaN()});
    test("Checks if multiply operation returns a number.", ()=> {expect(multiply(10,2)).not.toBeNaN()});
    test("Checks if divide operation returns a number.", ()=> {expect(divide(10,2)).not.toBeNaN()});
})