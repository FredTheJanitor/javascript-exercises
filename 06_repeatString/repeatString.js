const repeatString = function(string,num) {
// create a condition that returns Error if num is neg
if (num < 0) {
    return "ERROR"
}
// create a variable to hold the string to be returned
let finalString = "";
// loop through the string a num amount of times
for (let i = 0;i<num;i++){
// for each iteration of that loop concatenate the string
finalString += string
}
// return the string with the concatenation
return finalString;
};

// Do not edit below this line
module.exports = repeatString;
