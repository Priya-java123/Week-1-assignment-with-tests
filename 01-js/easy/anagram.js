/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
 console.log("string1 : " + str1);
  console.log("string2 : " + str2);

  //converting string to aarray using split() ,then sort(), then convert array to string using join()
  let sortedStr1 = str1.split("").sort().join("").trim();
  let sortedStr2 = str2.split("").sort().join("").trim();
  console.log("sorted array1 : " + sortedStr1);
  console.log("sorted array2 : " + sortedStr2);
  //converting String to array
  let arr1 = sortedStr1.split(" ");
  let arr2 = sortedStr2.split(" ");
  //array length
  if (arr1.length === 0 || arr2.length === 0) {
    return false;
  } else {
    if (sortedStr1 === sortedStr2) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = isAnagram;
