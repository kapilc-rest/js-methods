const array = [1, 3, 6, 2, 7, 4]

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

filterRangeInPlace(array,2,5)

console.log(array);