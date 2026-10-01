let a = 20;
let b = 6;

console.log("Penjumlahan:", a + b);
console.log("Pengurangan:", a - b);
console.log("Perkalian:", a * b);
console.log("Pembagian:", a / b);
console.log("Modulus:", a % b);



function luasPersegi(a, b) {
    let luas = a * b;
    return luas;
}


function luasSegitiga(a, b) {
    let luas = 0.5 * a * b;
    return luas;
}


function luasLingkaran(r) {
    let luas = 3.14 * r * r;
    return luas;
}



console.log("Luas Persegi:", luasPersegi(10, 10));
console.log("Luas Segitiga:", luasSegitiga(12, 8));
console.log("Luas Lingkaran:", luasLingkaran(7));