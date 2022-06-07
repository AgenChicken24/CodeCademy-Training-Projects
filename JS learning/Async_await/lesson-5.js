const {shopForBeans, soakTheBeans, cookTheBeans} = require('./lesson-5-library.js')

// Write your code below:

async function makeBeans() {
	const type = await shopForBeans()
	const isSoft = await soakTheBeans(type)
	const dinner = await cookTheBeans(isSoft)
	console.log(dinner)
}
makeBeans()