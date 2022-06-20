const path = require("path")

console.log(path.sep)


const filePath = path.join("/content","subcontent","test.txt")
console.log(filePath)
const pathBase = path.basename(filePath)
console.log(pathBase)
const absolute = path.resolve(__dirname,"/content","subcontent","test.txt")
console.log(absolute)