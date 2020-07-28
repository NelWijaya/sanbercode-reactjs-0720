// Soal 1
// di index.js
var readBooks = require('./callback.js')

var books = [
    {name: 'LOTR', timeSpent: 3000},
    {name: 'Fidas', timeSpent: 2000},
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

// Tulis code untuk memanggil function readBooks di sini
function membacaBuku(time, urutan) {
    readBooks(time, books[urutan], function (timeLeft) {
        if (timeLeft > 0 && (urutan+1) < books.length){
            membacaBuku(timeLeft, urutan+1)
        }else{
            console.log("I already done, read this books");
        }
    })
}
membacaBuku(10000, 0)


/*var time = 10000;
readBooks(time, books[0], function (timeBack) {
    time = timeBack;
    readBooks(time, books[1], function (timeBack) {
        time = timeBack;
        readBooks(time, books[2], function (timeBack) {
            time = timeBack;
            readBooks(time, books[3], function (timeBack) {
            })
        })
    })
})*/

/*var time = 10000;
books.forEach(function (item) {
     readBooks(time, item, function (timeBack) {
         time = timeBack;
     })
 })*/
