let aray = [1,2,3,4];
let from = Array.from('Na maikati putkata');
console.log(from);
let is = Array.isArray(from);
console.log(is);
let of = Array.of(1,2,3,10);
console.log(of);
let object = Array(3);
object.push('1')
console.log(object)
let concat = of.concat(object);
console.log(concat)
let copy = of.copyWithin(1,0,2)
console.log(copy)