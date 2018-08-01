const randName = require('./randName')
const fs = require('fs-extra')
const util = require('util')
const path = require('path')

const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)

let nameArr = randName(1000,{familyName:"",nameLen:3})
writeFile(path.join(__dirname, '/name.txt'), nameArr, {
	encoding: 'utf-8'
}).then(()=>{
	console.log("完成！")
}).catch((err)=>{
	console.log(err)
})