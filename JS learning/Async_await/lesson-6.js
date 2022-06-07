const cookBeanSouffle = require('./lesson-6-library.js')

// Write your code below:

async function hostDinnerParty() {
	try {
		const res = await cookBeanSouffle()
		console.log(`${res} is served!`)
		console.log('Bean Souffle is served!')
	} catch (error) {
		console.log(error)
		console.log('Ordering a pizza!')
	}
}

hostDinnerParty()