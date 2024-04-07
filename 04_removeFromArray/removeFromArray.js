function removeFromArray(arr, ...valuesToRemove){
    return arr.filter(item => !valuesToRemove.includes(item));
}

//const result = removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
