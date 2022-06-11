const limit = 7
let counter = 0

while(counter <= limit) {
    let result = ""
    for (let i = 0; i < counter; i++){
        result += "*"
    }
    console.log(result)
    counter++
}


for (let i = 1; i < 101; i++) {
    if (i % 15 === 0) {
        console.log("fizzBuzz");
        }
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i)
    }
}
