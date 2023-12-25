const printName = (name) => `Halo nama saya ${name}`;
const nama = "Farrel Giovanni Jaohari";
const orang = {
  nama: nama,
  umur: 15,
  cetakNama: printName(nama),
};

module.exports = { printName, nama, orang };
