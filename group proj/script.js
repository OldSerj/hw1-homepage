




let user = {
    name: "Anna",
    scores:[3, "7", 10, null, "abc", 4, 8, -2, 15, undefined, "12"]
}


function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

function average(arr) {
    return sum(arr) / arr.length
}  

function max(arr) {
    let max = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

function min(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }

    }
    return min
}

function cleanScores(scores) {
    let cleaned = [];
    for (let i = 0; i < scores.length; i++) {
        let score = parseInt(scores[i]);
        if (!isNaN(score) && score >= 0) {
            cleaned.push(score);
        }
    }
    return cleaned
}
    for (let i = 0; i < user.scores.length; i++) {

    let score = parseInt(user.scores[i]);
    if (isNaN(score) || score < 0) {

    } else {
        user.scores[i] = score
    }
}

function getStats(scores) {
    console.log("the sum of the scores is " + sum(scores));
    console.log("the average of the scores is " + average(scores));
    console.log("the max of the scores is " + max(scores));
    console.log("the min of the scores is " + min(scores));
}

function classify(scores) {
    let poor = 0; //<5
    let average = 0; //5-8
    let good = 0;//>8
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < 5) {
            poor++
        } else if (scores[i] >= 5 && scores[i] <= 8) {
            average++
        } else {
            good++
        }
    }
    console.log("poor: " + poor);
    console.log("average: " + average);
    console.log("good: " + good);
}



console.log(typeof(user.name));
for (let i = 0; i < user.scores.length; i++) {
    console.log("the type of " + user.scores[i] + " is " + typeof(user.scores[i]));
}

let cleanedScores = cleanScores(user.scores);
console.log("cleaned scores: " + cleanedScores);
getStats(cleanedScores);
classify(cleanedScores);
