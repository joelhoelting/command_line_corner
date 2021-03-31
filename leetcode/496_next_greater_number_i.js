var nextGreaterElement = function (nums1, nums2) {
  const map = {};
  const stack = [];

  for (let i = 0; i < nums2.length; i++) {
    if (!stack.length || nums2[i] < stack[stack.length - 1]) {
      stack.push(nums2[i]);
    } else {
      while (stack[stack.length - 1] < nums2[i]) {
        const lastEl = stack.pop();
        map[lastEl] = nums2[i];
      }
      stack.push(nums2[i]);
    }
  }

  for (num of stack) {
    map[num] = -1;
  }

  for (let i = 0; i < nums1.length; i++) {
    nums1[i] = map[nums1[i]];
  }

  return nums1;
};
