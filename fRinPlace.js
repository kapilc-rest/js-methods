function filterRangeInPlace(arr,a,b) {
    const array = [1, 2, 3, 4, 5, 6]
    arr = arr.filter((num, i) => a <= num <=b);
    console.log(filterRangeInPlace(arr,2,5));
}