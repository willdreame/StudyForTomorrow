// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

function maxSubArray(nums){
    if(nums.length === 1) return nums[0];

    let count  = 0, result = nums[0];
    for(let i = 0; i < nums.length; i++) {
        count += nums[i];
        if(count > result) {
            result = count
        }
        console.log(result, 'rrr')
        console.log(count, 'ccc')
        if(count <=0) { // 清除之前的累计值
            count = 0;
        }
    }
    return result
}


// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]), '////')
console.log(maxSubArray([-2,-1,-3,3,-1]), '////')