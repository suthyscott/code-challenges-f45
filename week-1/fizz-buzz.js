
for (let i = 1; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log("fizzbuzz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else {
        console.log(i)
    }
}

console.log('after loop', i)


let i = 1 

while(i <= 50){
    if (i % 15 === 0) {
        console.log("fizzbuzz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else {
        console.log(i)
    }
    i++
}