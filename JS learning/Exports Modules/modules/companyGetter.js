const getCheckedElement = (elements) => {
	let res = ''
	elements.forEach((elem) => {
		if (elem.checked) {
			res = elem.value
			return 0
		}
	})
	return res
}

export const CheckedElement = getCheckedElement