let word = prompt("Give me your dashed word");

function turnToArray (str) {
    return word.split("-");
}

function capitalize(str) {
    let newArray = str.split("").map((word,i) => {
        if (i === 0){
            return word.toUpperCase();
        }
        else return word;
    })
    return newArray.join("");

}

function capitalizeArray(array) {
    return array.map((word,i) => {
        if (i !== 0) {
            return capitalize(word);
        }
        else return word;
    })
}

function camelizeString (str) {
    let array = turnToArray(str);
    let capitalizedArray = capitalizeArray(array);
    let camelizedString = capitalizedArray.join("");
    return camelizedString;
}

console.log(`Your word: ${word}`)
console.log(`Camelized Word: ${camelizeString(word)}`);