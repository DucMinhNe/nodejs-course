const nums = [10, 20, 30];

for (let i = 0; i < nums.length; i++) console.log(i, nums[i]);
for (const n of nums) console.log(n);
for (const k in nums) console.log(typeof k, k); // 'string' '0'
nums.forEach((n, i) => console.log(i, n));

let i = 0;
while (i < 3) { console.log('w', i); i++; }

// for await of
async function* gen() { yield 1; yield 2; }
for await (const v of gen()) console.log(v);
