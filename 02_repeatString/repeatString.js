const repeatString = function(word, count) {
    let output = "";
    for (let i = 0 ; i < count; i++){
        output += word;
    }    
return output;
}

repeatString('hey',3);

// Do not edit below this line
module.exports = repeatString;

