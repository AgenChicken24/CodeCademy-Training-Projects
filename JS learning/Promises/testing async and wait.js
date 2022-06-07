const test = (time) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('inner')
			resolve()
		}, time)
	})
}

async function init() {
	console.log('starting')
	await test(500)
	console.log('Ending')
}

init()