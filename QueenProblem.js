// Checkpoint 1 | Creating the queen object

// Checkpoint 2 | Turning the queen

// Checkpoint 3 | Moving the queen

// Checkpoint 4 | Jump move the queen

// Checkpoint 5 |  Tracking the position

// Bonus 1 - Gotta keep her in the battle!
  
// Bonus 2 - The queen is more powerful than what you think!
    
// Bonus 3 - How about multiple queens?

var queen = {
  direction = "S",
  position = [4,0],
  whereabouts = []
};

function changeDirection(direct)
{
  switch(direct)
    {
        case "E" : console.log("East");
                  break;
        case "W" : console.log("West");
                  break;
        case "N" : console.log("North");
                  break;
        case "S" : console.log("South");
                  break;
        case "NE" : console.log("North East");
                  break;
        case "NW" : console.log("North West");
                  break;
        case "SE" : console.log("South East");
                  break;
        default : console.log("south West")
    }
}

function moveForward()
{
  
}

function jumpMoveForward()
{
  
}

function updatePosition()
{
  
}


positionLog = 
		  [["a8","b8","c8","d8","e8","f8","g8","h8"],
 		   ["a7","b7","c7","d7","e7","f7","g7","h7"],
           ["a6","b6","c6","d6","e6","f6","g6","h6"],
           ["a5","b5","c5","d5","e5","f5","g5","h5"],
           ["a4","b4","c4","d4","e4","f4","g4","h4"],
           ["a3","b3","c3","d3","e3","f3","g3","h3"],
           ["a2","b2","c2","d2","e2","f2","g2","h2"],
           ["a1","b1","c1","d1","e1","f1","g1","h1"]];






/*           
Console log an error message whenever the queen tries to step out of your 8x8 chessboard.

Add more power to your queen by helping her move and jump move backward too!

Add additional queens to the board. You can move them in turns. If one queen is going to run into the other, you don’t move the queen and console log an error saying so.
*/