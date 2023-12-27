import validator from "validator";
import chalk from "chalk";

// console.log(validator.isEmail("Farrel@gmail.com"));
// console.log(validator.isMobilePhone("0895082043029", "id-ID"));

// console.log(chalk.bgBlue.green.italic("Hello"));

const pesan = `${chalk.green("Lorem")} ipsum ${chalk.italic(
  "dolor"
)}, ${chalk.strikethrough.bold.green(
  "sit amet consectetur"
)} adipisicing elit. Quia, error.`;
console.log(pesan);

console.log(chalk.rgb(123, 45, 67).underline("Underlined reddish color"));
console.log(chalk.hex("#DEADED").bold("Bold gray!"));
