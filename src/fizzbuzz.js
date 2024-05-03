// TODO: Write your function in this file
function fizzBuzzRange(lower, upper) {
    let result = [];
    for (let i = lower; i <= upper; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}
// TODO: Change undefined below to the name of your function
module.exports = fizzBuzzRange;
