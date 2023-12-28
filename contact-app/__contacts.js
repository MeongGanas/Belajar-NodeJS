const fs = require("fs");
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (answer) => {
      resolve(answer);
    });
  });
};

const simpanContact = ({ nama, noHP }) => {
  const contact = { nama, noHP };
  const readContacts = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(readContacts);
  contacts.push(contact);

  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  console.log(`Contact ${nama} berhasil disimpan! (${nama}, ${noHP})`);

  rl.close();
};

module.exports = { tulisPertanyaan, simpanContact };
