function count(a, b, cb) {
    const res = a + b
    cb(res)
}
let arr = []
count(1, 6, function(res) {
    for (let i = 0; i < res; i++) {
        arr.push(i)
    }
    console.log(arr);
})