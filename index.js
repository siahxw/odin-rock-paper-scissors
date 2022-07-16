function computerPlay() {
    let number = Math.floor(Math.random() * 3) // Generates a random number from 0 to 2.
    switch(number) {
        case 0:
            return "ROCK"
            break;

        case 1:
            return "PAPER"
            break;

        case 2:
            return "SCISSORS"
            break;
        
        default:
            break;
/* The computerPlay function

There are three possible conditions.
If number equals 0 then "Rock" will be returned; if number equals
1 then "Paper" will be returned; if number equals 2 then "Scissors"
will be returned */
    }
}