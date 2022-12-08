const m = require('./testmodule');//take the whole object to m variable
const {mean} = require('./testmodule');//destructuring object and take only mean
console.log(m.mean([2,3,4,5,66]))
console.log(mean([2,3,4]))
