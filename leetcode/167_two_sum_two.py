from typing import List

def twoSum(self, numbers: List[int], target: int) -> List[int]:
  l = 0
  r = len(numbers) - 1
  
  while (l < r):
      new_sum = numbers[l] + numbers[r]
      
      if new_sum == target:
          return [l+1, r+1]
      elif new_sum > target:
          r -= 1
      else:
          l += 1
                
  # Space Complexity - O(1)
  # Time Complexity - O(n )