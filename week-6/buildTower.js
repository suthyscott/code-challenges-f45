/*
Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

The number passed in tells you how many floors the tower should have.

The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

Each block is represented by a *.

For example, a tower of 3 floors looks like this (note the spacing):

[
    '  *  ',
    ' *** ',
    '*****'
]
and a tower of 6 floors looks like this:

[
    '     *     ',
    '    ***    ',
    '   *****   ',
    '  *******  ',
    ' ********* ',
    '***********'
]
*/

const buildTower = (num) => {
    let tower = [] 
    let numOfAsterisks = 1
    let numOfChars = (num * 2 - 1)
    
    while(num > 0){
        let numOfSpaces = (numOfChars - numOfAsterisks) / 2
        let floor = ' '.repeat(numOfSpaces) + '*'.repeat(numOfAsterisks) + ' '.repeat(Math.floor(numOfSpaces)) 
        tower.push(floor)
        numOfAsterisks += 2
        num--
    }
    return tower
}

console.log(buildTower(9))