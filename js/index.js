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


 console.log("helllloooo)");

 var gameState = {
   "player":1,
   "board": [[],[],[]],
   "playerName":"Your Turn!",
   "remainingXPiece":5,
   "remainingOPiece":5
 }

 var index = 0;
 console.log("tst");
 while(index < 3) {
   var j = 0;
   console.log("1");
    while(j<3) {
      gameState["board"][index][j] = ""
      j+=1;
      console.log("2");
    }
    index+=1;
 }
 debugger;
 


function draw(currentGame) {
  $(".game-board-top-left").text(gameState["board"][0][0])
  $(".game-board-top-middle").text(gameState["game-board-top-middle"])
  $(".game-board-top-right").text(gameState["game-board-top-right"])
  $(".game-board-middle-left").text(gameState["game-board-middle-left"])
  $(".game-board-center").text(gameState["game-board-center"])
  $(".game-board-middle-right").text(gameState["game-board-middle-right"])
  $(".game-board-bottom-left").text(gameState["game-board-bottom-left"])
  $(".game-board-bottom-middle").text(gameState["game-board-bottom-middle"])
  $(".game-board-bottom-right").text(gameState["game-board-bottom-right"])
  $(".player-turn").text(gameState["playerName"])

  var xPieceValue = gameState["remainingXPiece"]
  $(".x-pieces").html("")
  while (xPieceValue>0) {
    $(".x-pieces").append('<div class="player-x-piece">X</div>')
    xPieceValue = xPieceValue-1
  }

  var oPieceValue = gameState["remainingOPiece"]
  $(".o-pieces").html("")
  while (oPieceValue>0) {
    $(".o-pieces").append('<div class="player-o-piece">O</div>')
    oPieceValue = oPieceValue-1
  }
  
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

function update(r,c){
  //1. update the board state to be the correct piece
  //2. change the player
  if(gameState["board"][r][c]=="") {
      if(gameState["player"]==1) {
      gameState["player"] = 2;
      gameState["board"][r][c] = "X"
      gameState["playerName"] = "Opponent's Turn!"
      gameState["remainingXPiece"] = gameState["remainingXPiece"] - 1
    } else {
      gameState["player"] = 1
      gameState["board"][r][c] = "O"
      gameState["playerName"] = "Your Turn!"
      gameState["remainingOPiece"] = gameState["remainingOPiece"] - 1
    }
  }
}



function setup() {

  $(".game-board-top-left").click(function() {
    update(0,0);
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