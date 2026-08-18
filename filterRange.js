const array = [1, 2, 3, 4, 5, 6];

function filterRange(arr,a,b) {
    //let n = arr.length();
    let changedArray = arr.filter(a <= num && num >= b);
    console.log(changedArray);
    return changedArray;
}

filterRange(array,2,5);