const a = 'single';
const b = "double";
const name = 'Minh';

// template literal — preferred for interpolation
const greeting = `Hello, ${name}! You have ${2 + 3} messages.`;
console.log(greeting);

// multi-line with backticks
const html = `
  <div>
    <h1>${name}</h1>
  </div>
`;

// escapes
console.log('line1\nline2');
console.log('she said \"hi\"');
