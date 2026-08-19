let arr = ["HTML", "JS", "CSS"];

function copySorted (arr) {
    let newArr = arr.slice();
    return newArr.sort();
}

let sorted = copySorted(arr);

console.log(sorted);

console.log(arr);