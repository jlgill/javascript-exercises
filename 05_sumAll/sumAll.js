function sumAll(startNum,stopNum){
    //Check if the numbers are negative and return an error
    if (typeof startNum !== 'number' || typeof stopNum !== 'number' || startNum < 0 || stopNum < 0){
        return 'ERROR';
    }

    //Determin the smaller and larger numbers between startNum and stopNum
    const minNum = Math.min(startNum, stopNum);
    const maxNum = Math.max(startNum, stopNum);

    //initiatlze sum
    let sum = 0;

    //Loop through the range and add each number to the sum
    for (let i = minNum; i <= maxNum; i++){
        sum += i;
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
