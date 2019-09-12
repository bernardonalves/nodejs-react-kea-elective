const variableFile = require("./exporting_variables.js")
const classFile = require("./bobstruction.js")


console.log(variableFile);
//console.log(variableFile.magicFunction);
//console.log(variableFile.strIntro);
//console.log(variableFile.magicNumber);

const bob1 = new classFile(2,3);
console.log(bob1.bobTangle());