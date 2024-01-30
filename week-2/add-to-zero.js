/*
Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

[1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

[0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

[0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
*/

const dataOne = [1, 4, 11, 2, 37, -4]
const dataTwo = [0, 21, 33, 6, 0, -9]
const dataThree = [0, 1, 2, 3, 4, 5]

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            console.log(i, j)
            if(i !== j && arr[j] + arr[i] === 0){
                return true
            }
        }
    }

    return false
}

// console.log(addToZero([0, 1, 2, 3, 4, 5]))

let result = false 
let compareNum = 0

while(compareNum < dataOne.length){
    for(let i = compareNum + 1; i < dataOne.length; i++){
        if(dataOne[compareNum] + dataOne[i] === 0){
            result = true
            console.log(result)
            break
        }
    }

    if(!result && compareNum === dataOne.length-1){
        console.log(result)
    }
    compareNum++
}