const array = [1, 2, 3, 4, 5, 6]

function filterRangeInPlace(arr,a,b) {
    let p = arr;
    p = arr.filter((num) => a <= num && num <=b);
    console.log(arr);
}

filterRangeInPlace(array,2,5);