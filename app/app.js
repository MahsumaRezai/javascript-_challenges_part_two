// 10
// 11
// 13
// 14

// 22

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


