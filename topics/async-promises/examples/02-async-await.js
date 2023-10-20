// async/await
async function loadAll(ids) {
  const results = [];
  for (const id of ids) {
    const u = await fetchUser(id);
    results.push(u);
  }
  return results;
}

// parallel
async function loadAllParallel(ids) {
  return Promise.all(ids.map(fetchUser));
}
