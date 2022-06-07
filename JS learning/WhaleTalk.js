let input = 'Hi, Human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    for (let k = 0; k < vowels.length; k++) {
        if (input[i] === vowels[k]) {
            resultArray.push(input[i])
        }
    }
    if (input[i] === 'e') {
        resultArray.push(input[i])
    }
    if (input[i] === 'u') {
        resultArray.push(input[i])
    }
}
let result = resultArray.join('').toUpperCase();
console.log(result);