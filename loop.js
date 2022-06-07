function Delay(ms) { //Use this function instead of Wait()
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}

function test() {
    i = 0
    while (i < 2) {
        i++
        console.log('Loop')
    }
    console.log('finished ', i)
}

async function second() {
    console.log('started code');
    test()
    console.log('Init the second');
    console.log(spiting())
    console.log('Finished the second');
}

function spiting() {
    return 10 + 2
}

setTimeout(second, 500)
// let x, y = spiting()
// console.log('x ', x, ' y ', y);
// console.log('starting');
// test()
// console.log('Second func');
// second()
// console.log('e nd');