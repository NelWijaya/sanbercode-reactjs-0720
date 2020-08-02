// Soal 1
function filterBooks(colorful, amountOfPage) {
    return new Promise(function (resolve, reject) {
        var books =[
            {name: "shinchan", totalPage: 50, isColorful: true},
            {name: "Kalkulus", totalPage: 250, isColorful: false},
            {name: "doraemon", totalPage: 40, isColorful: true},
            {name: "algoritma", totalPage: 300, isColorful: false},
        ]

        if (amountOfPage > 0){
            resolve(books.filter(x=> x.totalPage >= amountOfPage && x.isColorful == colorful));
        } else {
            var reason = new Error("maaf parameter salah");
            reject(reason);
        }
    });
}

function judulBuku(colorful, amountOfPage) {
    filterBooks(colorful, amountOfPage)
        .then(function (hasil) {
            console.log(hasil);
        })
        .catch(function (pesan) {
            console.log(pesan);
        })
}
// judulBuku(true,0); //Jika gagal, maka pada error akan ada pesan Error: maaf parameter salah
judulBuku(false, 88); //Jika berhasil




// Soal 2
class BangunDatar {
    constructor(nama) {
        this.nama = nama
    }

    luas(){
        return "";
    }

    keliling(){
        return "";
    }
}

class Lingkaran {
    constructor(r) {
        this._r = r;
        this.phi = Math.PI;
    }
    get jari2(){
        return this._r;
    }
    set jari2(x){
        this._r = x;
    }

    luas(){
        return console.log(this.phi * (this._r * this._r));
    }

    keliling(){
        return console.log(2*this.phi*this._r);
    }
}
bangun = new Lingkaran(5);
bangun.jari2 = 7;
bangun.luas();


class Persegi {
    constructor(s) {
        this._s = s;
    }
    get sisi(){
        return this._s;
    }
    set sisi(x){
        this._s = x;
    }

    luas(){
        return console.log(this._s * this._s);
    }

    keliling(){
        return console.log(4*this._s);
    }
}
kotak = new Persegi(5);
kotak.sisi = 10;
kotak.luas();


// Soal 3
let pesertaLomba= [
    {nama: "Budi", gender: "Pria", tinggi:"172cm"},
    {nama: "Susi", gender: "Wanita", tinggi:"162cm"},
    {nama: "Lala", gender: "Wanita", tinggi:"155cm"},
    {nama: "Agung", gender: "Pria", tinggi:"175cm"}
]

pesertaLomba.forEach((data)=>{
    console.log("Nama: "+data.nama+", Gender: "+data.gender+", dengan tinggi "+data.tinggi);
})


//Soal 4
const volumeBalok = (...args) =>{
    // let volume = 0;
    // args.filter(x=> volume = args[0]*args[1]*args[2]);
    // const lebar = args[0];
    // const panjang = args[1];
    // const tinggi = args[2];
    let [lebar,panjang,tinggi,...none] = args;
    return `${lebar}`*`${panjang}`*`${tinggi}`;
}

const volumeKubus = (...args) =>{
    // let volume = 0;
    // args.filter(x=> volume = args[0]*args[1]*args[2]);
    // const sisi = args[0];
    let [sisi, ...none] = args;
    return `${sisi}`*`${sisi}`*`${sisi}`;
}

console.log(volumeBalok(9,8,10));
console.log(volumeKubus(10));



//soal 5
let warna =["biru","merah","kuning","hijau"];

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitum"]
}

buku.warnaSampul = [...buku.warnaSampul, ...warna];
buku = {...buku, ...dataBukuTambahan};

console.log(buku);