// Core Module
// File System
const { error } = require("console");
const fs = require("fs");

// menuliskan string ke file ( synchronous )
// try {
//   fs.writeFileSync("data/test.txt", "Hello World secara synchronous");
// } catch (error) {
//   console.log(error);
// }

// menuliskan string ke file ( asynchronous )
// fs.writeFile("data/test.txt", "Hello World secara Asynchronous", (error) => {
//   console.log(error);
// });

// membaca isi file ( synchronous )
// const dataSync = fs.readFileSync("test.txt", "utf-8");
// console.log(dataSync);

// const data1 = fs.readFileSync("test.txt");
// console.log(data1.toString());

// membaca isi file ( asynchronous )
// fs.readFile("data/test.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

// fs.readFile("data/test.txt", (error, data) => {
//   if (error) throw error;
//   console.log(data.toString());
// });

// readline
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Masukkan nama anda : ", (nama) => {
//   rl.question("Masukkan tahun lahir : ", (tahunLahir) => {
// console.log(
//   `Halo ${nama}, umur kamu adalah ${2022 - parseInt(tahunLahir)} tahun`
// );
//     rl.close();
//   });
// });

// Latihan
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const folderDir = "./data";
if (!fs.existsSync(folderDir)) {
  fs.mkdirSync(folderDir);
}

const fileDir = "./data/contacts.json";
if (!fs.existsSync(fileDir)) {
  fs.writeFileSync(fileDir, "[]", "utf-8");
}

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (data) => {
      resolve(data);
    });
  });
};

const main = async () => {
  const nama = await tulisPertanyaan("Masukkan nama anda : ");
  const noHp = await tulisPertanyaan("Masukkan nomor hp anda : ");

  const contact = { nama, noHp };
  const file = fs.readFileSync("data/contacts.json", "utf-8");

  const contacts = JSON.parse(file);
  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log("Terimakasih sudah mengisi data");

  rl.close();
};
main();

// rl.question("Masukkan nama anda : ", (nama) => {
//   rl.question("Masukkan nomor hp anda : ", (noHP) => {
//     const contact = { nama, noHP };
//     const file = fs.readFileSync("data/contacts.json", "utf-8");

//     const contacts = JSON.parse(file);
//     contacts.push(contact);

//     fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

//     console.log("Terima Kasih sudah memasukkan data");

//     rl.close();
//   });
// });
