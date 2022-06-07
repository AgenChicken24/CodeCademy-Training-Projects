// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a == 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })
// async function init() {
//     console.log('Start');
//     await p.then((message) => {
//         console.log('This is in the then ' + message)
//     }).catch((message) => {
//         console.log('This is in the catch ' + message);
//     })
//     console.log('End');
// }
// init()
const userLeft = false
const userWathcingCatMeme = false


function watchtTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject('User left \n :(')
        } else if (userWathcingCatMeme) {
            reject('User Watching Cat meme \n WebDevSimplified < Cat')
        } else {
            resolve('Thumbs up and Subscribe')
        }
    })
}

watchtTutorialPromise().then((message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let v = 1+1
            if (v == 2) {
                resolve('SUcces' + message)
            } else {
                reject('Error' + message)
            }
        }, 1000)
    })
}).then((message) => console.log(message)).catch(message => console.log(message))