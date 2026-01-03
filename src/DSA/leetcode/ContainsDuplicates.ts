function containsDuplicate(nums: number[]): boolean {
  const maps = new Map(); // once i saw the question, i instantly knew it was maps for me
  for (let i = 0; i < nums.length; i++) {
    if (maps.has(nums[i])) return true;
    maps.set(nums[i], i);
  }
  return false;
}
