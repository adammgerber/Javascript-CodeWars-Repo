// sum of all numbers in an array called numbers

function sum(numbers){
    return numbers.reduce((prev, curr) => prev + curr, 0);
}