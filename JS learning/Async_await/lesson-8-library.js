let cookBeans = () => {
	return new Promise ((resolve) => {
		setTimeout(()=>{
			resolve('beans')
		}, 1000)
	})
}
  
let steamBroccoli = () => {
	return new Promise ((resolve) => {
		setTimeout(()=>{
			resolve('broccoli')
		}, 1000)
	})
}
  
let cookRice = () => {
	return new Promise ((resolve) => {
		setTimeout(()=>{
			resolve('rice')
		}, 1000)
	})
}
  
let bakeChicken = () => {
	return new Promise ((resolve) => {
		setTimeout(()=>{
			resolve('chicken')
		}, 1000)
	})
}
  
module.exports = {cookBeans, steamBroccoli, cookRice, bakeChicken}