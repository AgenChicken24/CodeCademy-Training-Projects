const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Vide 1 Recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Vide 2 Recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Vide 3 Recorded')
})

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then((dt) => {
    console.log(dt);
})