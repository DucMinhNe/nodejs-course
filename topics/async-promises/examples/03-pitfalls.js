// common pitfall: forgetting to await
async function bad() {
  const result = fetchUser(1); // missing await -> returns a Promise, not the user
  console.log(result.name);    // undefined
}

async function good() {
  const result = await fetchUser(1);
  console.log(result.name);
}
