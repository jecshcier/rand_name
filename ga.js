const fs = require('fs-extra')
const util = require('util')
const path = require('path')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)


readFile(path.join(__dirname, '/常用字.txt'), {
	encoding: 'utf-8'
}).then((content) => {
	let arr = []
	for (var i = 0; i < content.length; i++) {
		arr.push(content[i])
	}
	// 洗牌算法
	let len = arr.length
	let newArr = randArr(arr)

	return writeFile(path.join(__dirname, '/cyz2.js'), newArr, {
		encoding: 'utf-8'
	})
}).then(() => {
	console.log("完成")
}).catch((err) => {
	console.log(err)
})


function randArr(arr) {
	// 洗牌算法
	let len = arr.length
	let newArr = []
	for (var i = 0; i < len; i++) {
		let index = Math.floor(Math.random() * arr.length)
		console.log('随机位置-------->' + index)
		newArr.push(arr[index])
		arr.splice(index, 1)
		console.log('当前数组长度------->' + arr.length)
	}
	return newArr
}