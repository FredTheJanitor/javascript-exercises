const leapYears = (year)=>{
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);

    // basically main over complication below was not letting the
    // boolean operators just return the boolean.

    
    
    // // leap years dont include multiples of 100 unless they
    // // are multiples of 400
    // if (year % 4 === 0) {
    //     if (year % 100 === 0) {
    //         // if (year % 400 === 0) {
    //         //     return true;
    //         // } else {
    //         //     return false;
    //         // }
    //         return (year%400===0)? true : false
    //     }
    //     return true;
    // } else {
    //     return false;
    // }
};

// Do not edit below this line
module.exports = leapYears;
