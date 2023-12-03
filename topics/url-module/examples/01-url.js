const u = new URL('https://example.com/path?q=hi&page=2#x');
console.log(u.hostname, u.pathname, u.search);
console.log(u.searchParams.get('q'));
u.searchParams.set('page', '3');
console.log(u.toString());

// validate same-origin redirect
function isSafeRedirect(target, origin) {
  try {
    const a = new URL(target, origin);
    const b = new URL(origin);
    return a.origin === b.origin;
  } catch { return false; }
}
console.log(isSafeRedirect('/login', 'https://example.com'));
console.log(isSafeRedirect('//evil.com', 'https://example.com'));
