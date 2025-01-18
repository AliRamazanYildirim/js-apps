function twoSum(nums, target) {
    const complements = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (complements[complement] !== undefined) {
            return [complements[complement], i];
        }
        complements[num] = i;
    }
    return null;
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
console.log(twoSum([1, 2, 3], 7)); // Output: null
