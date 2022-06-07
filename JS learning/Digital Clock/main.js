function clock() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return `${h}:${m}:${s}`
}

function init() {
    let data = clock();
    console.log(data);
    document.getElementById('Clock').innerHTML = data;
    setTimeout(init, 1000)
}

document.addEventListener("DOMContentLoaded", function(event) {
    init()
});