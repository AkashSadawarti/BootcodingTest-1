// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

var moveZeroes = function(nums) {

    let  temp = 0;
    for(let i=0; i<=nums.length;i++){
        if(nums[i]>temp){
           nums[temp] = nums[i]
           temp++;
        }
    }
    while(temp < nums.length){
        nums[temp] = 0;
        temp++;
    }
    return nums
};
 
console.log( moveZeroes([0,1,0,5,8]));