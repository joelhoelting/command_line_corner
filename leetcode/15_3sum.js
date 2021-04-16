/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  result = [];
  nums.sort((a, b) => a - b);

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i === 0 || nums[i] !== nums[i - 1]) {
      twoSumTwoHelper(nums, i, result);
    }
  }

  return result;
};

var twoSumTwoHelper = function (nums, i, result) {
  var l = i + 1;
  var r = nums.length - 1;

  while (l < r) {
    var sum = nums[i] + nums[l] + nums[r];

    if (sum === 0) {
      result.push([nums[i], nums[l], nums[r]]);
      l += 1;
      r -= 1;

      while (l < r && nums[l] == nums[l - 1]) {
        l += 1;
      }
    } else if (sum > 0) {
      r -= 1;
    } else {
      l += 1;
    }
  }
};

// Space Complexity - O(n) + O(3) => O(n)
// Time Complexity - O(nlogn) + O(n^2) => O(n^2)
