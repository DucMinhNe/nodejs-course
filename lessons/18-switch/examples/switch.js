function dayType(day) {
  switch (day) {
    case 'Sat':
    case 'Sun':
      return 'weekend'; // grouped cases
    case 'Mon':
    case 'Tue':
    case 'Wed':
    case 'Thu':
    case 'Fri':
      return 'weekday';
    default:
      return 'unknown';
  }
}
console.log(dayType('Sat')); // weekend
console.log(dayType('Mon')); // weekday
