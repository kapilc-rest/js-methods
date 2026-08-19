let arr = [1, 2, 3];

function shuffle(array) {
    return array.sort((a, b) => { a = Math.random(); b = Math.random(); return a - b; } );
}

console.log(shuffle(arr));