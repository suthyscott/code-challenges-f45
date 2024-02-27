/*
You might know some pretty large perfect squares. But what about the NEXT one?

Write a function in perfectSquare.js that finds the next perfect square after the one passed in as an argument and returns it.

Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer (look at the examples if this sounds confusing).

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

For example:

perfectSquare(9) // should return 16 (3x3=9, 4x4=16)

perfectSquare(289) // should return 324 (17x17=289 18x18=324)

perfectSquare(3000) // should
*/

const perfectSquare = (num) => {
    for(let i = 0; i < num; i++){
        if(i * i === num){
            return ((i + 1) * (i + 1))
        }
    }
    return -1
}

console.log(perfectSquare(3000))