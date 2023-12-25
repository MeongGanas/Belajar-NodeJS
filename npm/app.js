const validator = require("validator");
const chalk = require("chalk");

console.log(validator.isEmail("farrel@gmail.com"));
console.log(validator.isMobilePhone("0822345678", "id-ID"));
console.log(validator.isNumeric("0822345678"));

// console.log(chalk.bgBlue.black.bold("Hello World!"));
const pesan = chalk`Lorem ipsum dolor {bgGreen.white sit, amet} consectetur adipisicing elit. Sapiente delectus quas quis distinctio a dolores.`;
console.log(pesan);
