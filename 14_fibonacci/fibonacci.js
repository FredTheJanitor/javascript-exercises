const fibonacci = function(x) {
    const fibArr = [];
    const z = +x;
    if (z===0) {
        return 0;
    } else if (z < 0) {
        return "OOPS";
    } else if (z > 1000) {
        return 'please dont break my computer lol';
    }
    for(let i=1;i<=z;i++){
        if (i === 1) {
            fibArr.push(1);
        } else if (i === 2) {
            fibArr.push(1);
        } else if (i > 2) {
            fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
        }
    }
    return fibArr[fibArr.length-1];
    

};

// Do not edit below this line
module.exports = fibonacci;
