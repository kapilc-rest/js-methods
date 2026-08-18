const array = [1, 2, 3, 4, 5, 6];

function filterRange(arr,a,b) {
    return changedArray = arr.filter((num) => a <= num && num <= b);
}

console.log(filterRange(array,2,5));