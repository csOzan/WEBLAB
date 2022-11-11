
const fs = require('fs');

const asallar = [3, 11, 2, 5, 7, 13, 19, 17, 23, 29, 31, 41, 37, 43, 47, 53, 59, 61, 67, 73, 71, 79, 83, 89 ];

function readPrimes() {
    var list = [];
    var content = "";
    content = fs.readFileSync('./asal_sayi.txt').toString();
    list = content.split(' ').map(Number);
    if(list.includes(0)){
        list.pop(0);
    }
    return list;
}
function fill(){
    var str="";
    fs.copyFileSync('asal_sayi.txt', 'tum_sayilar.txt');
    fs.appendFile('tum_sayilar.txt',"\nExcluded Numbers Are:\n", function(err){
        if(err) throw err;
    });
    var contents = readPrimes();
    var nonprimes = [];
    for (let i = 0; i < 90; i++) {
        if(!contents.includes(i)){
            nonprimes.push(i);
        }
    }
    for (let index = 0; index < nonprimes.length; index++) {
        str= nonprimes[index] + " ";
        fs.appendFile('tum_sayilar.txt',str, function(err){
        if(err) throw err;
    });
    }
}
fill(readPrimes());