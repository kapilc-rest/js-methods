const array = [1, 2, 3, 4, 5, 6];

function filterRange(arr,a,b) {
    //let n = arr.length();
    let changedArray = arr.filter((num) => a <= num && num <= b);
    return changedArray;
}

console.log(filterRange(array,2,5));