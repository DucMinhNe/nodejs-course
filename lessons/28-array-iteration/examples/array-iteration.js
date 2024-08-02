const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) console.log(nums[i]);
for (const n of nums) console.log(n);
nums.forEach((n, i) => console.log(i, n));

const doubled = nums.map(n => n * 2);
const evens = nums.filter(n => n % 2 === 0);
const total = nums.reduce((sum, n) => sum + n, 0);
console.log(doubled, evens, total);
