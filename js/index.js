/**
 *  Player State
 * Each player has some amount of pieces left 
 * 
 * Game State
 * Each cell is {"X", "O", empty ("")}
 * Whose turn it is
 * Score
 * game status
 */

 var gameState = {
   "player":1,
   "game-board-top-left" : "",
 }


function draw(currentGame) {
  // fill the gameboard with X's and O's
  console.log(currentGame);
}


/* <tr>
<td class="game-board-top-left"></td>
<td class="game-board-top-middle"></td>
<td class="game-board-top-right"></td>
</tr>
<tr>
<td class="game-board-middle-left"></td>
<td class="game-board-center"></td>
<td class="game-board-middle-right"></td>
</tr>
<tr>
<td class="game-board-bottom-left"></td>
<td class="game-board-bottom-middle"></td>
<td class="game-board-bottom-right"></td>
</tr> */

function update(player, cell){
  //1. update the board state to be the correct piece
  //2. change the player
}


function setup() {


  $(".game-board-top-left").click(function() {
    update(gameState["player"],"game-board-top-left");
    draw(gameState);
  });

  
}










// IGNORE
$(document).ready(function() {
  setup();
});