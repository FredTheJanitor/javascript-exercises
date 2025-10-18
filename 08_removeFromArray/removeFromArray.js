const removeFromArray = (arr,...theRemovedItems)=> {
    // This solution was described as "brute force" by chatGPT lmao
    // for (item of arr) {
    //     for (removedItem of theRemovedItems) {
    //         for (item of arr) {
    //             for (removedItem of theRemovedItems) {
    //                 if (item === removedItem) {
    //                     const indexOfRemoved = arr.indexOf(item);
    //                     arr.splice(indexOfRemoved,1);
    //                 }
    //             }
    //         } 
    //     }
    // } return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
