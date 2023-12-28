// mengambil argumen dari command line
const yargs = require("yargs");
const {
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
} = require("./contacts");

yargs
  .command({
    command: "add",
    describe: "menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama Lengkap",
        demandOption: true,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler({ nama, noHP }) {
      const contact = { nama, noHP };
      simpanContact(contact);
    },
  })
  .demandCommand();

// menampilkan daftar kontak
yargs.command({
  command: "list",
  describe: "menampilkan semua contact",
  handler() {
    listContact();
  },
});

// menampilkan detail contact
yargs.command({
  command: "detail",
  describe: "menampilkan detail contact berdasarkan nama lengkap",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler({ nama }) {
    detailContact(nama);
  },
});

// menghapus contact
yargs.command({
  command: "delete",
  describe: "menghapus contact berdasarkan nomor handphone",
  builder: {
    noHP: {
      describe: "Nomor Handphone",
      demandOption: true,
      type: "string",
    },
  },
  handler({ noHP }) {
    deleteContact(noHP);
  },
});

yargs.parse();
