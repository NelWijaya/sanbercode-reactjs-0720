// function luas_segitiga(alas, tinggi) {
//     var luas = 0.5*alas*tinggi;
//
//     return luas;
// }
//
// function luas_lingkaran(r) {
//     var phi = Math.PI;
//     var luas = phi*(r*r);
//
//     return luas;
// }
//
// function luas_persegi(sisi) {
//     var luas = sisi*sisi;
//     return luas;
// }
//
//
// console.log(luas_lingkaran(7))
// console.log(luas_persegi(5))
// console.log(luas_segitiga(12,7))


// var daftarAlatTulis=["2. Pensil", "5. Penghapus","3. Pulpen","4. Penggaris","1. Buku"];
//
// var i = 0;
// daftarAlatTulis.sort();
// while (i<daftarAlatTulis.length){
//     console.log(daftarAlatTulis[i]);
//     i++;
// }


// function tampilkanBintang(jumlahBintang) {
//     for (var i=0; i<jumlahBintang;i++){
//         var banyak_bintang ="";
//         for (var j=jumlahBintang;j>i;j--){
//             banyak_bintang+="*";
//         }
//         console.log(banyak_bintang);
//     }
// }
//  tampilkanBintang(7);


var jeniskelamin = "L";
var nama = "Sukiman";

if (jeniskelamin=="L"){
    console.log("bapak "+nama);
}else if(jeniskelamin=="P"){
    console.log("ibu "+nama);
}else {
    console.log("Jenis kelamin yang diinput error");
}