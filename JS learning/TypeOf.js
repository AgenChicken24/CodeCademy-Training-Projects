function type(type) {
    if (typeof(type) === 'number') {
        return true;
    } else {
        return false;
    }
}
console.log(type('1'));