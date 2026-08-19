let array = [5, 2, 1, -10, 8];

function compareNum (a,b) {
    if (a > b) return -1;
    if ( a == b) return 0;
    if ( a < b ) return 1;
}

array.sort(compareNum);

console.log(array);