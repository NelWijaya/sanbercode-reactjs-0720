// Soal 1
const perhitunganLingkaran = (r) =>{
    const phi = Math.PI;
    let luasLingkaran = phi * (r * r);
    let kelilingLingkaran = 2 * phi * r;

    return `Luas lingkaran: ${luasLingkaran} \nKeliling lingkaran: ${kelilingLingkaran}`;
}
console.log(perhitunganLingkaran(5));





// Soal 2
let kalimat ="";
const pertambahanKata = (kalimat) =>{
    const firstWord = "saya";
    const secondtWord = "adalah";
    const thirdWord = "seorang";
    const fourthWord = "frontend";
    const fifthWord = "developer";

    kalimat = `${firstWord} ${secondtWord} ${thirdWord} ${fourthWord} ${fifthWord}`
    return kalimat;
}
console.log(pertambahanKata(kalimat));





//Soal 3
class Book {
    constructor(name, totalPage, price) {
        this._name = name;
        this._totalPage = totalPage;
        this._price = price;
    }
    pesan(){
        return `Judul buku adalah ${this._name}, memiliki total ${this._totalPage} halaman dengan harga ${this._price}`;
    }
}

class komik extends Book{
    constructor(name, totalPage, price, isColorful) {
        super(name, totalPage, price);
        this._isColorful = isColorful;
    }
    fullMessage(){
        return this.pesan() + `, serta ini merupakan komik ${this._isColorful}`;
    }
}
komikBaru = new komik("Naruto",64,46000,"Bewarna");
console.log(komikBaru.fullMessage());