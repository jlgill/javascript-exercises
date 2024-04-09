const palindromes = function (str) {
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return alphanumericStr === alphanumericStr.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
