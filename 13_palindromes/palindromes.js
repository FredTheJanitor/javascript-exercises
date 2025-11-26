const palindromes = function (string) {
    const input = string
        .split("")
        .filter((char)=>char.toLowerCase() !== char.toUpperCase())
        .join("");

    return input === string
        .split("")
        .reverse()
        .filter((char)=>char.toLowerCase() !== char.toUpperCase())
        .join("");

};

// Do not edit below this line
module.exports = palindromes;
