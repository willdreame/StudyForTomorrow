

// function test(){
//     this.map= function(){
//         console.log('1111')
//     }
// }

// const a = new test()

// a.map()


function twoSum(nums, target){
    let hash = {};
    for(let i = 0; i < nums.length; i++) {
        if(hash[target - nums[i]] !==undefined) {
            return [i, hash[target-nums[i]]]
        }
        hash[nums[i]] = i;
    }
}

console.log(twoSum([1,2,3,4], 7))