var search = function(nums, target) {
	let leftIdx = 0;
	let rightIdx = nums.length-1;

	while (leftIdx <= rightIdx) {
		const pivot = Math.ceil((leftIdx + rightIdx) / 2);
		if (nums[pivot] === target) {
			return pivot;
		}
		if (nums[pivot] > target) {
			rightIdx = pivot - 1;
		} else {
			leftIdx = pivot + 1;
		}
	}

	return -1;
}