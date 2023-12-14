// Guessing Game
const maxi=prompt('Enter the maximum number');
const random=Math.floor(Math.random() * maxi)+1;
let guess=prompt('Guess the no??????');
while(true){
    if(guess=='quit' || guess=='QUIT'){
        console.log('Quitt!!!!');
        break;
    }
    if(guess==random){
        console.log(`Hurray you are correct!!! Random number is ${random}`);
        break;
    } else if(guess>random){
        guess=prompt('It is Bigger no, try to guess again');
    }
    else{
        guess=prompt('It is Smaller no, try to guess again');
    }
}