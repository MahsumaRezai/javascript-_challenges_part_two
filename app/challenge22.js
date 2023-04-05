/* 
#22
Write a rpsWinner() function with parameters player1 and player2. These parameters are
passed one of the strings 'rock', 'paper', or 'scissors' representing that player’s move. If
this results in player 1 winning, the function returns 'player one'. If this results in player 2
winning, the function returns 'player two'. Otherwise, the function returns 'tie'.
answer
*/
function rpsWinner(move, move1) {
    if (move == "rock" && move1 == "paper") {
        return "playertwo"
    }
    else if (move == "rock" && move1 == "scissors") {
        return "playerone"
    }
    else if (move == "paper" && move1 == "rock") {
        return "playerone"
    }
    else if (move == "scissors" && move1 == "rock") {
        return "playertwo"
    }
    else if (move == "rock" && move1 == "rock") {
        return "tic"
    }
    else if (move == "paper" && move1 == "paper") {
        return "tic"
    }
    else if (move == "scissors" && move1 == "scissors") {
        return "tic"
    }

}
rpsWinner()


