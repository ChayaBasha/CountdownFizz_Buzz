// These variables will be used to put our countdown functions into the DOM
let result = document.getElementById("countup")
let result2 = document.getElementById("fizzbuzz");
// These variables will help us stop the countdown
let stopCounter = false;
let stopFizzbuzzer = false;

// these functions help us to control the stop/start using the buttons
function stopCount() {
    stopCounter=true;
}

function stopFizzBuzz() {
    stopFizzbuzzer=true;
}

// this function shows a very simple promise
function timer(ms) {
    return new Promise(
        res => setTimeout(res, ms)
    );
}
// we use async and await to make the loops pause between iterrations
async function count() {
    for(let i = 1; !stopCounter; i++ ) {
        result.innerHTML = i;
        await timer (1000);
    }
    stopCounter = false;
}


async function fizzbuzz() {
    let currentCountdown;
    for(let i = 1; !stopFizzbuzzer; i++) {
        if(i%3==0 && i%5==0) {
            currentCountdown = "fizz buzz";
        } else if(i%3==0) {
            currentCountdown = "fizz";
        } else if(i%5==0){
            currentCountdown= "buzz";
        } else {
            currentCountdown = i;
        }
        result2.innerHTML = currentCountdown;

        await timer(1000);

    }
    stopFizzbuzzer = false;
}