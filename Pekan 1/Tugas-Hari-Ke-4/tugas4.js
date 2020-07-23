// Soal 1
console.log("LOOPING PERTAMA");
var i = 1;
while (i<=20){
    if(i%2==0){
        console.log(i+" - I love coding");
    }
    i++;
}

console.log("LOOPING KEDUA");
i = 20;
while (i>=1){
    if (i%2==0){
        console.log(i+" - I will become a frontend developer");
    }
    i--;
}


// Soal 2
console.log("\n\n");
for (i=1; i<=20; i++){
    if (i%3==0 && i%2==1){
        console.log(i+" - I Love Coding");
    }else if(i%2==0){
        console.log(i+" - Berkualitas");
    }else if(i%2==1){
        console.log(i+" - Santai");
    }
}

// Soal 3
console.log("\n\n");
i = 1;
do {
    //menyiapkan variabel kosong untuk menampung #
    var cetakan ="";
    for (var j=1;j<=i;j++){
        //penambahan # pada variabel terus ditambahkan sesuai dengan barisnya
        cetakan+="#";
    }
    console.log(cetakan);
    i++;
}while (i<=7)


// Soal 4
console.log("\n\n");
var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));


// Soal 5
console.log("\n\n");
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
// array yang diberikan cukup berantakan, jadi harus di sort
daftarBuah.sort();
for (i=0;i<daftarBuah.length;i++){
    console.log(daftarBuah[i]);
}
