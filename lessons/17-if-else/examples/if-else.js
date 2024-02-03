function grade(score) {
  if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}
console.log(grade(85)); // B

// guard clause style (flat is better than nested)
function process(user) {
  if (!user) return console.log('no user');
  if (!user.active) return console.log('inactive');
  console.log('processing', user.name);
}
