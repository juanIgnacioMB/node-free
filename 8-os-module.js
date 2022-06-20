const os = require("os")

//console.log(os.userInfo())

const osMet={
    name:os.type(),
    release:os.release(),
    tomatmem: os.totalmem(),
    freeMem:os.freemem()
}

console.log(osMet)