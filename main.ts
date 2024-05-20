/*Question 1
Create an array named fruits that contains the following string
elements: "apple", "banana", "mango", "orange".*/
let fruits = ["apple","banana","mango","orange"]
console.log(fruits);
//---------------------------------------------------------------------------------------------------------

/*Question 2
Declare an array named numbers that can contain only number
elements and initialize it with the values 10, 20, 30, and 40.*/
let numbers = [10,20,30,40];
console.log(numbers);
//--------------------------------------------------------------------------------------------------------

/*Question 3
Access the third element of the fruits array and assign it to a
variable named thirdFruit.*/
let thirdFruit = fruits[2];
console.log(thirdFruit);
//----------------------------------------------------------------------------------------------------------

/*Question 4
Change the second element of the numbers array to 25.*/
numbers[2] = 25;
console.log(numbers);
//---------------------------------------------------------------------------------------------------------

/*Question 5
Add the element "grape" to the end of the fruits array using the
method.*/
fruits.push("grape");
console.log(fruits);
//----------------------------------------------------------------------------------------------------------

/*Question 6
Remove the last element from the fruits array using the
method and assign it to a variable named lastFruit.*/
let lastfruit = fruits.pop()
console.log(lastfruit);
console.log(fruits);
//---------------------------------------------------------------------------------------------------------------

/*Question 7
Remove the first element from the fruits array using the
method and assign it to a variable named firstFruit.*/
let firstfruit = fruits.shift()
console.log(firstfruit);
console.log(fruits);
//------------------------------------------------------------------------------------------------------------------

/*Question 8
Add the element "kiwi" to the beginning of the fruits array
using the method.*/
fruits.unshift("kiwi");
console.log(fruits);
//------------------------------------------------------------------------------------------------------

/*Question 9
Remove 2 elements from the fruits array starting from index 1
using the method.*/
fruits.splice(1,2)
console.log(fruits);
//--------------------------------------------------------------------------------------------------

/*Question 10
Insert the elements "pineapple" and "pear" at index 2 of the
fruits array using the method.*/
fruits.splice(2,0,"pineapple","pear");
console.log(fruits);
//--------------------------------------------------------------------------------------------------

/*Question 11
Create a new array named citrusFruits that contains the first
two elements of the fruits array using the method.*/
let citrusFruits = fruits.slice(0,2);
console.log(citrusFruits);
//--------------------------------------------------------------------------------------------------------

/*Question 12
Create a new array named lastTwoFruits that contains the last
two elements of the fruits array using the method.*/
let lastTwoFruits = fruits.slice(-2);
console.log(lastTwoFruits);
//-------------------------------------------------------------------------------------------------------------

/*Part 1: Basic Arrays - Product Inventory
Challenge:
You are tasked with creating a Product Inventory system. Implement functions and logic to
manage object manipulation effectively.
1. Define a type alias named Product to represent a product with the following
properties:
• name (string): The name of the product.
• price (number): The price of the product.
• inventory (object): An object containing inventory details including:
• stock (number): The number of products available.
• colorOptions (string[ ]): An array listing available colors.
2. Create an array named products containing at least three product objects. Each
product object should include a name, price, and inventory details.
3. Implement a function named changeColor that takes a product object and a new
color as input. This function should update the color property of the product and
adjust the price based on the new color (implement your own logic, e.g., increase by
10% for red, decrease by 5% for blue).
4. Display each product's name, price, stock, and available colors. Iterate through the
products array and print each product's details.*/
type  product {
    name: string,
    price: number,
    inventory: {
        stock: number,
        colorOption:string[]
}
}
const 