var gameOver = false;
var totalMoves = 0;
var currPlayer = 'X';
var tie = false;
function placeMarker(spotId)
{
    if(gameOver === false && totalMoves !=9)
    {
        var spot = document.getElementById(spotId);
        if(spot.innerHTML === '')
        {
            totalMoves++;
            if(currPlayer === 'X')
            {
                spot.innerHTML = 'X';
                updateGameStatus();
            }

            else
            {
                spot.innerHTML = 'O';
                updateGameStatus();
            }
        }
    }
    else
        return;
}

function hasWon()
{
    var s1 = document.getElementById('s1')
    var s2 = document.getElementById('s2')
    var s3 = document.getElementById('s3')
    var s4 = document.getElementById('s4')
    var s5 = document.getElementById('s5')
    var s6 = document.getElementById('s6')
    var s7 = document.getElementById('s7')
    var s8 = document.getElementById('s8')
    var s9 = document.getElementById('s9')
    
    if(gameOver === false && totalMoves > 4)
    {
        if((s1.innerHTML === s2.innerHTML && s2.innerHTML === s3.innerHTML && s1.innerHTML != '') 
        || (s4.innerHTML === s5.innerHTML && s5.innerHTML === s6.innerHTML && s4.innerHTML != '')
        || (s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML && s7.innerHTML != '')
        || (s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML && s1.innerHTML != '')
        || (s2.innerHTML === s5.innerHTML && s5.innerHTML === s8.innerHTML && s2.innerHTML != '')
        || (s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML && s3.innerHTML != '')
        || (s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML && s1.innerHTML !='')
        || (s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML && s3.innerHTML !=''))
        {
            gameOver = true;
        }
    }

    if(!gameOver && totalMoves === 9)
    {
        gameOver = true;
        tie = true;
    }
}


function updateGameStatus()
{
    hasWon();
    var statusBoard = document.getElementById('status')
    if(gameOver === true)
    {
        if(tie === true)
        {
            statusBoard.innerHTML = "Wow, it was a tie!";
            return;
        }
        else
        {
            statusBoard.innerHTML = currPlayer.concat(" has won!");
            return;
        }
    }
    else
    {
        if(currPlayer === 'X')
        {
            currPlayer = 'O';
            statusBoard.innerHTML = currPlayer.concat("'s turn");
            return;
        }
        if(currPlayer === 'O')
        {
            currPlayer = 'X';
            statusBoard.innerHTML = currPlayer.concat("'s turn");
            return;
        }
    }
}

