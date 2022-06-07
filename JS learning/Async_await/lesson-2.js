function withConstructor(num){
	return new Promise((resolve) => {
		if (num === 0){
			resolve('zero')
		} else {
			resolve('not zero')
		}
	})
}
  
withConstructor(0)
	.then((resolveValue) => {
		console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`)
	})
  
// Write your code below:
async function withAsync(num) {
	return num === 0 ? 'zero' : 'not zero'
}
withAsync(0).then((res) => console.log(res))
// Leave this commented out until step 3:

withAsync(100)
	.then((resolveValue) => {
		console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`)
	})
