let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

function unique(arr) {
    let newArr = strings.slice();
    for(let i = 0; i<newArr.length; i++) {
        for(let j = i+1; j < newArr.length; j++) {
            if (newArr[i] == newArr[j]) {
                newArr.splice(j,1)
                j--;
            }
        }
    }
    return newArr;
}

console.log(unique(strings));