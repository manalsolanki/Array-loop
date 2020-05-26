//Question 1.

const practiceArray = []
practiceArray[0] = 'Hello';
practiceArray[3] = 'World';

console.log(practiceArray);
// the output will say that it has 2 empty items in the middle that is at 1 and 2 index.

lenghtOfArray = practiceArray.length
//Lenght of the array is 4.

valueOfFirstPosition = practiceArray[1];
//Undefined at index 1.


// For traveing each element in the array.
for (i=0 ; i<practiceArray.length;i++ ){
    // operations to be carried out.
}
for( const element of practiceArray ){
   // operations to be carried out.
}

practiceArray.forEach(element => { // operations to be carried out.
});


console.log("---------------------------------------");



// Question 2.
const allElements = document.querySelectorAll('li');
console.log(allElements)
// AllElements is type of a nodelist which is smilar to array but not array.

// Loops iteration
for( const element of allElements ){
    console.log(element.textContent);
}
for (i=0 ; i<allElements.length;i++ ){
    console.log(allElements[i].textContent)
}
allElements.forEach(element => console.log(element.textContent));

console.log("---------------------------------------");


// Question 3.
const planets = ['Neptune', 'Earth', 'Krypton', 'Jupiter', 'Mercury', 'Saturn', 'Venus']
// result  ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

var  temp = planets.shift();
var tempVenus= planets.pop();
planets.push(temp);
planets.unshift(tempVenus);
planets.splice(2,1,'Mars');
temp = planets.splice(4,1);
planets.unshift(temp[0]);
planets.splice(6,0,'Uranus');
console.log(planets);

// LOOPS

// Question -1
const numbers = [1, 2, 4, 8, 16, 32, 64]
// Print each values from the Array to a new line of the console, ***forward***
for (i= 0 ; i<numbers.length ; i++)
{
    console.log(numbers[i]);
}

//Print each values from the Array to a new line of the console, ***backward***
for(i= (numbers.length)-1 ; i>=0 ; i--)
{
    console.log(numbers[i]);
}

// Question - 2

// a
// f In HTML, create a <ul> with ten children <li>. Use querySelectorAll to select all <li>, then iterate over the resulting NodeList
elementsList = document.querySelectorAll('li');
elementsList.forEach(element => console.log(element.textContent));

// g The String: 'Hello, world!. `forEach()` cannot iterate a String because it's not part of the String prototype, so a function must first convert the String to an Array (or similar)
var tempString = 'hello, world!';
const tempArray = tempString.split(',');
tempArray.forEach(value=>  console.log(value));
