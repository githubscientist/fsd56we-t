// anonymous function
// let findMedian = function (nums1, nums2) {
//     // combine both the arrays into a single array (sorted + unsorted)
//     let nums = nums1.concat(nums2);

//     // sort the array if the previous step involves merging of the arrays in an unsorted way
//     nums.sort((a, b) => a - b);

//     // find the average of the middle two elements in the combined array
//     let median = (nums[nums.length / 2 - 1] + nums[nums.length / 2])/2;

//     // print/return the average
//     console.log(median);
// }

// let nums1 = [1, 3, 6, 7, 10];
// let nums2 = [2, 4, 5, 8, 9];

// findMedian(nums1, nums2);

// arrow function
// let findMedian = (nums1, nums2) => {
//     // combine both the arrays into a single array (sorted + unsorted)
//     let nums = nums1.concat(nums2);

//     // sort the array if the previous step involves merging of the arrays in an unsorted way
//     nums.sort((a, b) => a - b);

//     // find the average of the middle two elements in the combined array
//     let median = (nums[nums.length / 2 - 1] + nums[nums.length / 2])/2;

//     // print/return the average
//     console.log(median);
// }

// let nums1 = [1, 3, 6, 7, 10];
// let nums2 = [2, 4, 5, 8, 9];

// findMedian(nums1, nums2);

// IIFE: Immeidately Invoked Function Expression
((nums1, nums2) => {
    // combine both the arrays into a single array (sorted + unsorted)
    let nums = nums1.concat(nums2);

    // sort the array if the previous step involves merging of the arrays in an unsorted way
    nums.sort((a, b) => a - b);

    // find the average of the middle two elements in the combined array
    let median = (nums[nums.length / 2 - 1] + nums[nums.length / 2])/2;

    // print/return the average
    console.log(median);
})([1, 3, 6, 7, 10], [2, 4, 5, 8, 9]);
