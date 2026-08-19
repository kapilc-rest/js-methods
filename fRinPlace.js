const array = [5, 3, 8, 1]

function filterRangeInPlace(arr,a,b) {
    for (let i = 0; i < arr.length; i++) {
        if(a <= arr[i] && arr[i] <=b) {
            continue;
        }
        else {
            arr.splice(i,1);
            i--;
        }

    }
}

filterRangeInPlace(array,1,4)

console.log(array);