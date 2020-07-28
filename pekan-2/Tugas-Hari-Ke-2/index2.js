//Soal 2
var readBooksPromise = require('./promise.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000}
]

/*
function readingBook() {
    readBooksPromise(10000, books[0])
        .then(function (timeLeft) {
            console.log(timeLeft);
            readBooksPromise(timeLeft, books[1])
                .then(function (timeLeft) {
                    console.log(timeLeft);
                    readBooksPromise(timeLeft, books[2])
                        .then(function (timeLeft) {
                            console.log(timeLeft);
                        })
                        .catch(function (salah) {
                            console.log(salah);
                        })
                })
                .catch(function (salah) {
                    console.log(salah);
                })
        })
        .catch(function (salah) {
            console.log(salah);
        })
}
readingBook();*/

function  membacaBuku(waktu, urutan) {
    readBooksPromise(waktu, books[urutan])
        .then(function (timeLeft) {
            console.log(timeLeft);
            if (timeLeft > 0 && (urutan+1) < books.length){
                membacaBuku(timeLeft, (urutan+1))
            }else{
                console.log("I already done, read this books");
            }
        })
        .catch(function (salah) {
            console.log(salah);
        })
}

membacaBuku(10000,0)