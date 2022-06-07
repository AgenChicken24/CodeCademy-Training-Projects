// const shopForBeans = require('./lesson-4-library.js')

// async function getBeans() {
// 	console.log('1. Heading to the store to buy beans...')
// 	let value = await shopForBeans()
// 	console.log(`3. Great! I'm making ${value} beans for dinner tonight!`)
// }

// getBeans()


async function testing() {
	return new Promise((resolve) => {
		resolve('Tesint')
	})
}

async function init() {
	console.log('First message')
	const val = testing()
	console.log('The value is :',val)
	console.log('second message')
}
init()