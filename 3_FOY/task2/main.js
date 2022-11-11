const fs = require('fs');

function polynome(array){
    return array[1] * array[0] *array[0] + array[2] * array[0] + array[3];
}
function fix(){
    var rows = [];
    var results =[];
    var buffer = [];
    var content = "";
    var num=0;
    content = fs.readFileSync('./6.txt').toString();
    rows = content.split('\n').map(String);
    rows.forEach(element => {
        buffer = element.split(',').map(Number);
        num = polynome(buffer);
        results.push(num);
    });
    return results;
}
function main(){
    console.log(fix().toString());
}

main();