const removeFromArray = (arr,...theRemovedItems)=> arr.filter(arrItem=>!theRemovedItems.includes(arrItem));
    // I need to check every array item
    // check every array item with filter, and only return
    // array items that return a value of true
    // const filteredResult = arr.filter((arrItem)=>{
    //     // this is what has to return true to keep arrItem
    //     // for every rmItem, rmItem !== arrItem
    //     // const arrItemIsNotOnList = theRemovedItems.every(rmItem=> rmItem !== arrItem)
    //     const arrItemIsNotOnList = (!(theRemovedItems.includes(arrItem)))
    //     return arrItemIsNotOnList; 
    //     // need to find away to say any of theRemovedItems
    // });
    // return filteredResult;
    // to see that for every removed item
    // the array item does not equal the removed item
    // and if that is true return the resulting array
// };
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
    // ------------------------------------------------
    // this didnt work and its overwhelming me to look at rn lol
    // const filtered = arr.filter((arrItem)=>(theRemovedItems.forEach(rmItem=>rmItem)===arrItem));
    // console.log(filtered)
    // return filtered;
    // ------------------------------------------------
    // create a variable to hold the result
//     const result = arr.filter(element => {
//         theRemovedItems.every(rmItem => {
//         return (!(rmitem === element)))})};
//         }
//     return result;
// };
// ----------------i got confused again---------------

// Do not edit below this line
module.exports = removeFromArray;
