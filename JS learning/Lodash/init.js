let _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    },
    inRange(number, start, end) {
      let temp = start;
      if (!end) {
        end = start;
        start = 0;
      };
      if (start > end) {
        start = end;
        end = temp;
      }
      return (number > start && number < end) || number == start;
    },
    words(str) {
      let words = str.split(' ');
      return words;
    },
    pad(str, len) {
      if (str.length >= len) {
        return str;
      };
      let startPaddingLength = Math.floor((len - str.length) / 2);
      let endPaddingLength = len - str.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength) + str + ' '.repeat(endPaddingLength);
      return paddedString;
    },
    has(obj, key) {
      if (obj[key] != undefined) {
        return true;
      } else {
        return false;
      }
    },
    invert(obj) {
      let invertedObj = {}
      for (key in obj) {
        let objValue = obj[key]
        invertedObj[objValue] = key
      }
      return invertedObj
    },
    findKey(obj, func) {
      for (key in obj) {
        if (func(obj[key])) {
          return key
        }
      }
      return undefined;
    },
    drop(arr, n=1) {
      let droppedArr = arr.slice(n)
      return droppedArr
    },
    dropWhile(arr, func) {
      let dropNumber = arr.findIndex((element, index) => {
        return !func(element, index, arr)
      })
      let droppedArr = this.drop(arr, dropNumber)
      return droppedArr
    },
    chunk(arr, size = 1) {
      let arrChunks = []
      for (let i = 0; arr.length > i; i+=size) {
        let arrChunk = arr.slice(i, size+i)
        arrChunks.push(arrChunk)
      }
      return arrChunks
    }
}
// Do not write or modify code below this line.
module.exports = _;