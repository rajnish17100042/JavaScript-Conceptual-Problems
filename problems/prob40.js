// The function must find and return the second largest number in nums.

function getSecondLargest(nums) {
    let newArray = [];
    for (let arr of nums) {
        if (!(newArray.includes(arr))) {
            newArray.push(arr);
        }
    }
    newArray.sort();
    newArray.pop();

    return newArray[newArray.length - 1];
}





let nums = [2, 3, 6, 6, 5];
let nums2 = [2, 3, 6, 6, 5, 9, 8, 5, 9, 2, 7, 3, 8, 6, 4, 8, 9];
// console.log(nums);
console.log(getSecondLargest(nums));
console.log(getSecondLargest(nums2));