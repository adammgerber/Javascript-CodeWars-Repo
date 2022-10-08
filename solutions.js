// sum of all numbers in an array called numbers

function sum(numbers){
    return numbers.reduce((prev, curr) => prev + curr, 0);
}

/******************************************************* */


// Rock, Paper, Scissors

const rps = (p1, p2) => {
    if(p1=== p2) return "Draw!";
    let rules = {rock: "scissors", paper: "rock", scissors: "paper" }
    if (p2 === rules[p1]){
        return "Player 1 won!";
    }else{
        return "Player 2 won!"
    }
}

/******************************************************* */

//find opposite (15 ---> -15)

function opposite(number){
    return -number;
}

/******************************************************* */

//remove all spaces/whitespace

function removeSpace(x){
    x.replace(/ /g, "")
}

/******************************************************* */

//given an array [1,2,3] double each number so its [2,4,6]

function maps(x){
    return x.map(n => n * 2);
  }


/******************************************************* */

//convert to string 

function toString(b){
    String(b)
}

/******************************************************* */

toString(344)