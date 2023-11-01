function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    return searchString.includes(subString);
};
let searchString = "Hello world, welcome to the universe.";
let subString = "world";

console.log(isSubString(searchString, subString));
