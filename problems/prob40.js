'use strict'

/*
40. Write a function getSecondLargest(nums). 
It has one parameter: an array, nums, of n numbers. The function must find and return the second largest number in nums.

nums = [2, 3, 6, 6, 5];
Output: 5
*/



function getSecondLargest(nums) {

    // create an empty array to store unique elements in the array
    let newArray = [];
    for (let arr of nums) {
        if (!(newArray.includes(arr))) {
            newArray.push(arr);
        }
    }

    // sort the array in increasing order
    newArray.sort();
    //delete the last element which is the first greatest number
    newArray.pop();

    //now return the last element of the changed array , i.e second largest number
    return newArray[newArray.length - 1];
}





let nums = [2, 3, 6, 6, 5];
let nums2 = [2, 3, 6, 6, 5, 9, 8, 5, 9, 2, 7, 3, 8, 6, 4, 8, 9];
// console.log(nums);
console.log(getSecondLargest(nums));
console.log(getSecondLargest(nums2));