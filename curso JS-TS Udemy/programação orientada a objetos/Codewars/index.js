function persistence(n) {
  var times = 0;
  n = n.toString();
  
  while (n.length > 1) {
    times++;
    n = n.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

console.log(persistence(25))