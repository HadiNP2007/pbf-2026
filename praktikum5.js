const input = require("readline");

const rl = input.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekGanjilGenap(angka) {
    if (angka % 2 === 0) {
        return "Angka tersebut adalah GENAP";
    } else {
        return "Angka tersebut adalah GANJIL";
    }
}

rl.question("Masukkan sebuah angka: ", (jawaban) => {
    let angka = parseInt(jawaban);

    console.log(cekGanjilGenap(angka));

    rl.close();
});