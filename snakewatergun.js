// const prompt = require("prompt-sync")({sigint: true});
let player1;
let score_player1 = 0;
let computer = ["snake","water","gun"];
let randdom = computer[(Math.floor(Math.random() *3))]
let score_computer = 0;
let rounds = 3;
console.log("Welcome to the game of snake, water and Gun");
console.log("here you will get to play maximum 3 rounds");
do {
    player1 = prompt("Enter :")
    if(player1 == "snake")
    {
        console.log("Round tied");
        rounds--;
        console.log("Rounds left: " + rounds);
    }
    else if(player1 == "water")
    {
        console.log("Computer won this round");
        score_computer++;
        console.log("Score of Player :  " + score_player1 );
        console.log("Score of Computer:  " + score_computer );
        rounds--;
        console.log("Rounds left: " + rounds);
    }
    else if(player1 == "gun")
    {
        console.log("Player1 won the round");
        score_player1++;
        console.log("Score of Player:  " + score_player1 );
        console.log("Score of Computer:  " + score_computer );
        rounds--;
        console.log("Rounds left: " + rounds);
    }
    else
    {
        console.log("please enter the correct Choice")
    }
}
while(rounds != 0)
if(score_computer == score_player1)
{
    console.log(" match draw ");
}
else if(score_player1 > score_computer)
{
    console.log("Player1 won the match");
}
else
{
    console.log("Computer won the match")
}
console.log("                 Match Over!!                        ");
console.log("                 Total score:                        ");
console.log("                 Score of Player: " + score_player1   );
console.log("                 Score of Computer: " + score_computer);

