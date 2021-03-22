var gameOver = false;
var totalMoves = 0;
var currPlayer = 'X';
function placeMarker(spotId)
{
    if(!gameOver)
    {
    //if the game is not over
        //get spot/element by spotId
        //if spot is empty
            //replace marker by changing innerHTML of the spot
            //depending on who is the current player
            //check if current player has won the game
            //if(hasWon()){}
            //if yes, display message, set gameOver = true;
            //else, switch players, totalMoves++
    //else
        //do nothing
    }
}

function hasWon()
{
    //get each spot using getElementById
    //for example, s1 = document.getElementById('1')
    //s2 = document.getElementById('2')
    //s3, s4...s9
    //if(!gameOver)
    //s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML <=handles first row
        //gameOver = true;
    //else
        //gameOver = false;

    ///if(!gameOver)
    //{
        //if(totalMoves == 8) maybe 9
            //gameOver = true;
    //}

}