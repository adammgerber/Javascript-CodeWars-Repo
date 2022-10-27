
//Brute force solution

str = "xxXooo"
str = str.toLowerCase()

function XO(str) {
    str = str.toLowerCase()
    let includesX = str.includes("x")
    let includesO = str.includes("o")

    if(!includesX || !includesO){
        return false
    }

    str.split()
    let target = "x";
    let oTarget = "o";

    let counter = 0;
    let oCounter = 0;

    for (letter of str) {
    if (letter == target) {
            counter++;
        }
    if (letter == oTarget) {
        oCounter++;
    }
    };
    return counter == oCounter
}



console.log(XO(str))

//optimized version

function XO(str) {
    let x = str.match(/x/gi); // g: matches letter, i: irrelevant if lowercase or uppercase
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}