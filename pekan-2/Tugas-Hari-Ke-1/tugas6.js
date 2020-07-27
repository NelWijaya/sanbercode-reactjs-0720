// soal 1
/*
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var arrayDaftarPesertaBaru = {
    nama : arrayDaftarPeserta[0],
    "jenis kelamin" : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    "tahun lahir" : arrayDaftarPeserta[3]
}
console.log(arrayDaftarPesertaBaru)*/
var arrayDaftarPeserta = {
    nama : "Asep",
    "jenis kelamin" : "laki-laki",
    hobi : "baca buku",
    "tahun lahir" : 1992
}






// Soal 2
console.log("\n")
var arrayDaftarBuah = [
    {nama : "strawberry", warna : "merah", "ada bijinya" : "tidak", harga : 9000},
    {nama : "jeruk", warna : "oranye", "ada bijinya" : "ada", harga : 8000},
    {nama : "Semangka", warna : "Hijau & Merah", "ada bijinya" : "ada", harga : 10000},
    {nama : "Pisang", warna : "Kuning", "ada bijinya" : "tidak", harga : 5000}
]
//Memunculkan data pertama
console.debug(arrayDaftarBuah[0])





// Soal 3
console.log("\n")
var dataFilm = []
// Membuat fungsi (function)
function tambahData(nama, durasi, genre, tahun) {
    dataFilm.nama = nama;
    dataFilm.durasi = durasi;
    dataFilm.genre = genre;
    dataFilm.tahun = tahun;

    console.log(dataFilm)
}

tambahData("Siberius", "120 menit","Action",2020);





// Soal 4
console.log("\n")
class Animal{
    constructor(name){
        this.animalName = name;
        this._legs = 4;
        this._cold_blooded = false;
    }

    get name(){
        return this.animalName;
    }

    get legs(){
        return this._legs;
    }

    get cold_blooded(){
        return this._cold_blooded;
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false


class Ape {
    constructor(name){
        this.animalName = name;
        this._legs = 2;
    }

    get name(){
        return this.animalName;
    }

    get legs(){
        return this._legs;
    }

    yell(){
        console.log("Auooo")
    }
}

class Frog {
    constructor(name){
        this.animalName = name;
        this._legs = 4;
    }

    get name(){
        return this.animalName;
    }

    get legs(){
        return this._legs;
    }

    jump(){
        console.log("hop hop")
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"





// Soal 5
console.log("\n")
class Clock {
    constructor({ template }) {
        var timer;

        function render() {
            var date = new Date();

            var hours = date.getHours();
            if (hours < 10) hours = '0' + hours;

            var mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;

            var secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;

            var output = template
                .replace('h', hours)
                .replace('m', mins)
                .replace('s', secs);

            console.log(output);
        }

        this.stop = function() {
            clearInterval(timer);
        };

        this.start = function() {
            render();
            timer = setInterval(render, 1000);
        };
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();