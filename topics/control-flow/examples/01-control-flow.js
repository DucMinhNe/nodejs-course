const role = 'admin';

// switch
switch (role) {
  case 'admin':
  case 'owner':
    console.log('full access'); break;
  case 'user':
    console.log('limited'); break;
  default:
    console.log('guest');
}

// dispatch table
const access = {
  admin: 'full', owner: 'full', user: 'limited',
};
console.log(access[role] ?? 'guest');

// ternary
const label = role === 'admin' ? 'A' : role === 'user' ? 'U' : 'G';
console.log(label);
