const leapYears = function(year) {
    // Leap years are divisible by 4, but not by 100 unless also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;
