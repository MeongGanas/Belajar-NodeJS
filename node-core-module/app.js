// Core Module
// File System
const fs = require("fs");

// menuliskan string ke dalam file (Synchronous)
// try {
//   fs.writeFileSync("test.txt", "Hello World Secara Synchronous");
// } catch (err) {
//   console.log(err);
// }

// menuliskan string ke dalam file (asynchronous)
// fs.writeFile("data/test.txt", "Hello World secara asynchronous", (error) => {
//   if (error) console.log(error);
// });

// membaca isi file (synchronous)
// const dataSync = fs.readFileSync("test.txt", "utf-8");
// console.log(dataSync);

// mambaca isi file (asynchronous)
// fs.readFile("data/test.txt", "utf-8", (error, data) => {
//   if (error) throw error;
//   console.log(data);
// });

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");
const rl = readline.createInterface({ input, output });

const buatPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (answer) => {
      resolve(answer);
    });
  });
};

const main = async () => {
  const nama = await buatPertanyaan("Tuliskan nama kamu : ");
  const kelas = await buatPertanyaan("Tuliskan kelas kamu : ");

  const data = { nama, kelas };
  const studentsFile = fs.readFileSync("data/students.json", "utf-8");
  const students = JSON.parse(studentsFile);
  students.push(data);

  fs.writeFileSync("data/students.json", JSON.stringify(students));

  console.log(`Terimakasih ${nama} sudah mengisi data.`);

  rl.close();
};

main();
