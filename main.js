// //Question 1.

// const practiceArray = []
// practiceArray[0] = 'Hello';
// practiceArray[3] = 'World';

// console.log(practiceArray);
// // the output will say that it has 2 empty items in the middle that is at 1 and 2 index.

// console.log(practiceArray.length)
// //Lenght of the array is 4.

// console.log(practiceArray[1]);
// //Undefined at index 1.


// // Question 2.


// // Question 3.
// const planets = ['Neptune', 'Earth', 'Krypton', 'Jupiter', 'Mercury', 'Saturn', 'Venus']
// // result  ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// var  temp = planets.shift();
// var tempVenus= planets.pop();
// planets.push(temp);
// planets.unshift(tempVenus);
// planets.splice(2,1,'Mars');
// temp = planets.splice(4,1);
// planets.unshift(temp[0]);
// planets.splice(6,0,'Uranus');
// console.log(planets);

// LOOPS


const numbers = [1, 2, 4, 8, 16, 32, 64]
// for (i= 0 ; i<numbers.length ; i++)
// {
//     console.log(numbers[i]);
// }
for(i= (numbers.length)-1 ; i>=0 ; i--)
{
    console.log(numbers[i]);
}

