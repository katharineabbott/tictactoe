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
   "game-board-top-middle" : "",
   "game-board-top-right" : "",
   "game-board-middle-left" : "",
   "game-board-center" : "",
   "game-board-middle-right" : "",
   "game-board-bottom-left" : "",
   "game-board-bottom-middle" : "",
   "game-board-bottom-right" : "",
   "playerName":"Your Turn!"
 }

 


function draw(currentGame) {
  $(".game-board-top-left").text(gameState["game-board-top-left"])
  $(".game-board-top-middle").text(gameState["game-board-top-middle"])
  $(".game-board-top-right").text(gameState["game-board-top-right"])
  $(".game-board-middle-left").text(gameState["game-board-middle-left"])
  $(".game-board-center").text(gameState["game-board-center"])
  $(".game-board-middle-right").text(gameState["game-board-middle-right"])
  $(".game-board-bottom-left").text(gameState["game-board-bottom-left"])
  $(".game-board-bottom-middle").text(gameState["game-board-bottom-middle"])
  $(".game-board-bottom-right").text(gameState["game-board-bottom-right"])
  $(".player-turn").text(gameState["playerName"])
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

function update(cell){
  //1. update the board state to be the correct piece
  //2. change the player
  if(gameState[cell]=="") {
      if(gameState["player"]==1) {
      gameState["player"] = 2;
      gameState[cell] = "X"
      gameState["playerName"] = "Opponent's Turn!"
    } else {
      gameState["player"] = 1
      gameState[cell] = "O"
      gameState["playerName"] = "Your Turn!"
    }
  }
}



function setup() {

  $(".game-board-top-left").click(function() {
    update("game-board-top-left");
    draw(gameState);
  });
  $(".game-board-top-middle").click(function() {
    update("game-board-top-middle");
    draw(gameState);
  });
  $(".game-board-top-right").click(function() {
    update("game-board-top-right");
    draw(gameState);
  });
  $(".game-board-middle-left").click(function() {
    update("game-board-middle-left");
    draw(gameState);
  });
  $(".game-board-center").click(function() {
    update("game-board-center");
    draw(gameState);
  });
  $(".game-board-middle-right").click(function() {
    update("game-board-middle-right");
    draw(gameState);
  });
  $(".game-board-bottom-left").click(function() {
    update("game-board-bottom-left");
    draw(gameState);
  });
  $(".game-board-bottom-middle").click(function() {
    update("game-board-bottom-middle");
    draw(gameState);
  });
  $(".game-board-bottom-right").click(function() {
    update("game-board-bottom-right");
    draw(gameState);
  });

  
}










// IGNORE
$(document).ready(function() {
  setup();
  draw();
});