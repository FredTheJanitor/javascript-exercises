const palindromes = function (string) {
    const input = string
        .toLowerCase()
        .split("")
        .filter((char)=>char.toLowerCase() !== char.toUpperCase())
        .join("");

    return input === string
        .toLowerCase()
        .split("")
        .reverse()
        .filter((char)=>char.toLowerCase() !== char.toUpperCase())
        .join("");

};

// Do not edit below this line
module.exports = palindromes;
