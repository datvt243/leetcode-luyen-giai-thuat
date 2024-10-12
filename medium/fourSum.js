/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const log = console.log.bind(console);
var fourSum = function (nums, target) {
	nums = nums.sort((a, b) => a - b);
	const _result = [];

	for (let i = 0, s = nums.length; i < s - 1; i++) {
		let first = nums[i];
		for (let j = i + 1; j < s; j++) {
			let second = nums[j];
			let left = j + 1,
				right = s - 1;

			while (left < right) {
				const sum = first + second + nums[left] + nums[right];

				if (sum === target) {
					_result.push([first, second, nums[left], nums[right]]);

					while (left < right && nums[left] === nums[left + 1])
						left++;
					while (left < right && nums[right] === nums[right - 1])
						right--;

					left++;
					right--;
				} else if (sum < target) {
					left++;
				} else right--;
			}
		}
	}

	return _result;
};

const test = [
	{
		arr: [1, 0, -1, 0, -2, 2],
		target: 0,
		v: [
			[-2, -1, 1, 2],
			[-2, 0, 0, 2],
			[-1, 0, 0, 1],
		],
	},
	{
		arr: [2, 2, 2, 2, 2],
		target: 8,
		v: [[2, 2, 2, 2]],
	},
];
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
const target = 1;
console.log(fourSum(test[target].arr, test[target].target));
