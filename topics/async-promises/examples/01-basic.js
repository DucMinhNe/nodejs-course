// promise chaining
function fetchUser(id) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, name: 'user_' + id }), 20);
  });
}

fetchUser(1)
  .then((u) => { console.log(u); return fetchUser(u.id + 1); })
  .then((u) => console.log(u))
  .catch(console.error);
