const {checkInventory} = require('./library.js')

const order = [['sunglasses', 1], ['bags', 2]]

// Write your code below:

const handleSuccess = (succ) => console.log(succ)

const handleFailure = (err) => console.log(err)

checkInventory(order).then(handleSuccess, handleFailure)