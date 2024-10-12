/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let output = Math.min();
  let spaceTemp = Math.min();

  nums = nums.sort((a, b) => a - b);

  for (let i = 0, stop = nums.length; i < stop; i++) {
    let left = i + 1;
    let right = stop - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum;
      }

      const space = Math.abs(target - sum);
      output = space < spaceTemp ? sum : output;

      if (sum < target) {
        left++;
      } else right--;
    }
  }
  return output;
};

const cases = [
  {
    nums: [-1, 2, 1, -4],
    target: 1,
    expect: 2,
  },
  {
    nums: [4, 0, 5, -5, 3, 3, 0, -4, -5],
    target: -2,
    expect: -2,
  },
  {
    nums: [-4, 2, 2, 3, 3, 3],
    target: 0,
    expect: 0,
  },
  {
    nums: [0, 3, 97, 102, 200],
    target: 300,
    expect: 300,
  },
];

const index = 3;
console.log(threeSumClosest(cases[index].nums, cases[index].target));
