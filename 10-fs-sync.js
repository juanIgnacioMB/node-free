const {readFileSync, writeFileSync} = require("fs")

const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/subcontent/second.txt", "utf8")

const write = writeFileSync("./content/result-sync.txt",`here is the result: ${first} ${second}`)