const sumAll = (num1, num2)=>{
    // this swaps num1 and num2, because num2 needs to be > num1
    if (num1>num2) {
        let newNum1 = num2;
        let newNum2 = num1;
        num1 = newNum1;
        num2 = newNum2;
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR"
    }
    const resultArr = [];
    for(let i = 0; i <= (num2-num1); i++) {
        resultArr.push(num1+i)
    }
    return resultArr.reduce((total, indvArrItem)=>total+indvArrItem);
};

// Do not edit below this line
module.exports = sumAll;
