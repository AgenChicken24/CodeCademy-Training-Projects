// Import the encryptors functions here.
const {reverseCipher, symbolCipher, caesarCipher} = require('./encryptors.js')
const number = 25

const encodeMessage = (str) => {
    // Use the encryptor functions here.
    const res = caesarCipher(symbolCipher(reverseCipher(str)), number)
    return res
}

const decodeMessage = (str) => {
    // Use the encryptor functions here.
    const res = reverseCipher(symbolCipher(caesarCipher(str, -Math.abs(number))))
    return res
}

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === 'encode' || process.argv[2] === 'e') {
        output = encodeMessage(str);
    } 
    if (process.argv[2] === 'decode' || process.argv[2] === 'd') {
        output = decodeMessage(str);
    } 
    
    process.stdout.write(output + '\n');
    process.exit();
}

// Run the program.
process.stdout.write(`Enter the message you would like to ${process.argv[2]}...\n> `);
process.stdin.on('data', handleInput);