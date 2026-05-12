# 
1. Gafton Nicolas-Adelin
2. Bătrîn Sergiu-George
3. Olaru Dragos

## Code Snippet

```javascript
let user = {
    name: "Anna",
    scores:[3, "7", 10, null, "abc", 4, 8, -2, 15, undefined, "12"]
}
```

## Ex.1

```javascript
console.log(typeof(user.name));
for (let i = 0; i < user.scores.length; i++) {
    console.log("The type of " + user.scores[i] + " is " + typeof(user.scores[i]));
}
```

```terminal
The type of "Anna" is string
The type of 3 is number
The type of "7" is string
The type of 10 is number
The type of null is object
The type of "abc" is string
The type of 4 is number
The type of 8 is number
The type of -2 is number
The type of 15 is number
The type of undefined is undefined
The type of "12" is string
```

### Answer

This happens because of a bug in JavaScript's early design. null should technically be its own type, but due to how the typeof operator was designed, it incorrectly returns "object" for null values.
In Python, none has its own proper type (NoneType), so type(None) correctly returns `<class 'NoneType'>`


## Ex.2

```javascript
for (let i = 0; i < user.scores.length; i++) {

    let score = parseInt(user.scores[i]);
    if (isNaN(score) || score < 0) {
        user.scores.splice(i, 1);
        i--
    } else {
        user.scores[i] = score
    }
}
```

upon using `console.log(user.scores), this code will return:

```terminal
[
  3,  7, 10, 4,
  8, 15, 12
]
```

## Ex.3

we wrote the following functions:
```javascript
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
```

and called as such:

```javascript
console.log("The sum of the scores is " + sum(user.scores))
console.log("The average of the scores is " + average(user.scores));
console.log("The max of the scores is " + max(user.scores))
console.log("The min of the scores is " + min(user.scores));
```

that return (using the new, sanitized array) in order of appearence:

```terminal
The sum of the scores is 59
The average of the scores is 8.428571428571429
The max of the scores is 15
The min of the scores is 3
```

## Ex.4

```javascript
function tally(arr) {
    let poor = 0; //<5
    let average = 0; //5-8
    let good = 0;//>8
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) {
            poor++
        } else if (arr[i] >= 5 && arr[i] <= 8) {
            average++
        } else {
            good++
        }
    }
    console.log("poor: " + poor);
    console.log("average: " + average);
    console.log("good: " + good);
}
```
we call `tally(user.scores);`

```terminal
poor: 2
average: 2
good: 3
```

## Ex.5

in retrospect, the task was clear but i had trouble understanding. we were asked to convert the last three tasks into dedicated functions, something i had done with the last two. Here are the modified equired functions:

```javascript
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

function getStats(scores) {//the functions are the ones defined above
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
```

functions used:

```javascript
let cleanedScores = cleanScores(user.scores);
console.log("cleaned scores: " + cleanedScores);
getStats(cleanedScores);
classify(cleanedScores);
```

```terminal
cleaned scores: 3,7,10,4,8,15,12
the sum of the scores is 59
the average of the scores is 8.428571428571429
the max of the scores is 15
the min of the scores is 3
poor: 2
average: 2
good: 3
```
