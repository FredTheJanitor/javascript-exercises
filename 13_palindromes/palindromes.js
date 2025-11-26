const palindromes = function (string) {
    const input = string
        .toLowerCase()
        .split("")
        // check if the character is a letter by seeing if it has cases, or a number
        .filter((char)=>(char.toLowerCase() !== char.toUpperCase()) || isFinite(char))
        // I guess spaces are finite, so yeet those
        .filter((char)=>char !== " ")
        .join("");

    return input === string
        .toLowerCase()
        .split("")
        .reverse()
        .filter((char)=>(char.toLowerCase() !== char.toUpperCase()) || isFinite(char))
        .filter((char)=>char !== " ")
        .join("");

};

// Do not edit below this line
module.exports = palindromes;
