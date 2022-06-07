function makeUpperCase(value) {
    console.log(value.toUpperCase())
    return function() {
        console.log('Test');
    }
}

// makeUpperCase('peter')

function reverseString(value) {
    console.log(value.split('').reverse().join(''));
}

function handleName(name, cb) {
    const fullName = `${name} smith`
    cb(fullName)
}

handleName('peter', makeUpperCase('peter'))
handleName('peter', reverseString)