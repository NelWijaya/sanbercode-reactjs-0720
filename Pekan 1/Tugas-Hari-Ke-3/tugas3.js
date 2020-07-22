// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

var kalimat = kataPertama.concat(" "+kataKedua.charAt(0).toUpperCase()+kataKedua.slice(1).concat(" "+kataKetiga.concat(" "+kataKeempat.toUpperCase())));
console.log(kalimat);


// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var total = Number(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + Number(kataKeempat);
console.log(total);


// Soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4,14); // do your own!
var kataKetiga = kalimat.substr(15,3);// do your own!
var kataKeempat = kalimat.substr(19,5);// do your own!
var kataKelima = kalimat.substring(25,31);// do your own!

console.log('Kata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);


// Soal 4
var nilai = 80;
if(nilai>=80){
    console.log("A");
}else if(nilai>=70 && nilai<80){
    console.log("B");
}else if(nilai>=60 && nilai<70){
    console.log("C");
}else if(nilai>=50 && nilai<60){
    console.log("D");
}else if(nilai<50){
    console.log("E")
}


// Soal 5
var tanggal = 14;
var bulan = 12;
var tahun = 2000;

switch (bulan) {
    case 1 :    bulan = "Januari";
                break;
    case 2 :    bulan = "Febuari";
                break;
    case 3 :    bulan = "Maret";
                break;
    case 4 :    bulan = "April";
                break;
    case 5 :    bulan = "Mei";
                break;
    case 6 :    bulan = "Juni";
                break;
    case 7 :    bulan = "Juli";
                break;
    case 8 :    bulan = "Agustus";
                break;
    case 9 :    bulan = "September";
                break;
    case 10 :    bulan = "Oktober";
                break;
    case 11 :    bulan = "November";
                break;
    case 12 :    bulan = "Desember";
                break;
}
console.log(tanggal+" "+bulan+" "+tahun);