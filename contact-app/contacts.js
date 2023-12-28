const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadData = () => {
  const readContacts = fs.readFileSync("./data/contacts.json", "utf-8");
  const contacts = JSON.parse(readContacts);

  return contacts;
};

const simpanContact = ({ nama, noHP }) => {
  const contact = { nama, noHP };

  const contacts = loadData();

  const duplikat = contacts.find((contact) => contact.noHP === noHP);
  if (duplikat) {
    console.log(
      chalk`{red Nomor kontak sudah ada!} {italic.bold (nama: ${duplikat.nama}, noHP: ${duplikat.noHP})}`
    );

    return false;
  }

  //   cek noHP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk`{red Nomor kontak salah!} {italic.bold (noHP: ${noHP})}`);
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync(dataPath, JSON.stringify(contacts));

  console.log(`Contact berhasil disimpan! (${nama}, ${noHP})`);
};

const listContact = () => {
  const contacts = loadData();

  console.log(chalk`{bold Daftar Kontak}`);
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} (${contact.noHP})`);
  });
};

const detailContact = (nama) => {
  const contacts = loadData();

  const result = contacts.filter(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (result.length < 1) {
    console.log(
      chalk`{red.bold Tidak ada hasil ditemukan dengan nama }{bold ${nama}}`
    );
    return false;
  }

  console.log(
    chalk`{green.bold Berikut adalah hasil pencarian }{bold ${nama}}`
  );

  result.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} (${contact.noHP})`);
  });
};

const deleteContact = (noHP) => {
  const contacts = loadData();
  const newContacts = contacts.filter((contact) => contact.noHP !== noHP);

  if (contacts.length === newContacts.length) {
    console.log(
      chalk`{red Contact dengan nomor {white.bold ${noHP}} tidak ada}`
    );
    return false;
  }

  fs.writeFileSync(dataPath, JSON.stringify(newContacts));

  console.log(
    chalk`{green Contact dengan nomor {white.bold ${noHP}} berhasil dihapus}`
  );
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
