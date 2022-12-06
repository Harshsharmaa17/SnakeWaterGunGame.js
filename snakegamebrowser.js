let player1;
let score_player1 = 0;
let computer = ["snake","water","gun"];
let randdom = computer[(Math.floor(Math.random() *3))]
let score_computer = 0;
let rounds = 3;
document.write("Welcome to the game of snake, water and Gun" + "</br>");
document.write("here you will get to play maximum 3 rounds" + "</br>");
do {
    player1 = prompt("Enter :")
    if(player1 == "snake")
    {
        alert("Round tied");
        rounds--;
    }
    else if(player1 == "water")
    {
        alert("Computer won this round");
        score_computer++;
        rounds--;
    }
    else if(player1 == "gun")
    {
        alert("Player1 won the round");
        score_player1++;
        rounds--;
    }
    else
    {
        alert("please enter the correct Choice")
    }
}
while(rounds != 0)
if(score_computer == score_player1)
{
    document.write(" match draw ");
}
else if(score_player1 > score_computer)
{
    document.write("Player1 won the match");
}
else
{
    document.write("Computer won the match")
}
document.write("                 Match Over!!                        "+ "</br>");
document.write("                 Total score:                        " + "</br>");
document.write("                 Score of Player: " + score_player1   + "</br>");
document.write("                 Score of Computer: " + score_computer + "</br>");

