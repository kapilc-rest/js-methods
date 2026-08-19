let arr = [1, 2, 3];

function shuffle(array) {
    return array.sort((a, b) => { a = Math.random(); b = Math.random(); return a - b; } );
}

console.log(shuffle(arr));

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}