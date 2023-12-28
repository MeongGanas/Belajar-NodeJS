const contacts = require("./contacts");

const main = async () => {
  const nama = await contacts.tulisPertanyaan("Masukkan nama : ");
  const noHP = await contacts.tulisPertanyaan("Masukkan nomor handphone : ");

  contacts.simpanContact(nama, noHP);
};

main();
