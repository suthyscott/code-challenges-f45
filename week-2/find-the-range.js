/*
Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

For example, if given the array [1, 4, 11, 2, 37, -4], your code should print out -4, 37.
*/

// const numArr = [1, 4, 11, 2, 37, -4]
const numArr = [87, 4998, 2, 86, 43, 98]
// const numArr = [1,2,3,4,5,6,7,8,9,10]

let largest = numArr[0]
let smallest = numArr[0]

for(let i = 0; i < numArr.length; i++){
    if(numArr[i] > largest){
        largest = numArr[i]
    } else if(numArr[i] < smallest){
        smallest = numArr[i]
    }
}

console.log(largest, smallest)

// const bigSmall= [1, 4, 11, 2, 37, -41]
// let big = 0
// let small = 0

// i = 0
// console.log(big)

// while (i < bigSmall.length) {
//     if (bigSmall[i] > big) {

//         big = bigSmall[i]

//         i += 1
//     } else {
//         i += 1
//     }
// }
// console.log(big)