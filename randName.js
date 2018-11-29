const data = require('./data')
// options:{familyName,nameLen}
const randName = (num, options) => {
	let nameArr = []
	for (let i = 0; i < num; i++) {
		let familyName
		let nameType

		// 若有姓氏限制
		if (options.familyName) {
			familyName = options.familyName
		} else {
			familyName = data.familyName[Math.floor(Math.random() * data.familyName.length)]
		}

		// 若有姓名长度限制
		if (options.nameLen) {
			if (options.familyName.length < options.nameLen) {
				nameType = options.nameLen - options.familyName.length - 1
			}
		} else {
			let flag = Math.floor(Math.random() * 10)
			if (flag > 7) {
				nameType = 2
			} else if (flag < 5) {
				nameType = 0
			} else {
				nameType = 1
			}
		}

		let name2 = data.cyz[Math.floor(Math.random() * data.cyz.length)]
		let name3 = data.cyz[Math.floor(Math.random() * data.cyz.length)]
		let name4 = data.cyz[Math.floor(Math.random() * data.cyz.length)]

		switch (nameType) {
			case 0:
				nameArr.push(familyName + name2)
				console.log(familyName + name2)
				break
			case 1:
				nameArr.push(familyName + name2 + name3)
				console.log(familyName + name2 + name3)
				break
			case 2:
				nameArr.push(familyName + name2 + name3 + name4)
				console.log(familyName + name2 + name3 + name4)
				break
			default:
				break
		}
	}
	return nameArr

}
module.exports = randName