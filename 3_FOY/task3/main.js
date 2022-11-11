
const fs = require('fs');

function readPrimes() {
    var list = [];
    var content = "";
    content = fs.readFileSync('./asal_sayi.txt').toString();
    list = content.split(',').map(Number);
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