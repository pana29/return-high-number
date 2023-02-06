let array = [1, 3, 4, 5, 11, 40, 2, 6];

const max = (n) => {
  let highNr = n[0];
  for (let i = 1; i <= n.length; i++) {
    if (n[i] > highNr) {
      highNr = n[i];
    }
  }
  return highNr;
};
console.log(max(array));
