/*
    rest operator

        - syntax: ...
        - used to represent an indefinite number of arguments as an array
*/

// function add(x=0, y=0, ...z) {
//     console.log(x, y, z);
// }


// function add(x = 0, y = 0, ...z) {
//     let sum = x + y;
//     for (let index = 0; index < z.length; index++){
//         sum += z[index];
//     }
//     console.log(sum);
// }

function add(...nums) {
    let sum = 0;
    for (let index = 0; index < nums.length; index++){
        sum += nums[index];
    }
    console.log(sum);
}

add(1, 2, 3, 4, 5);