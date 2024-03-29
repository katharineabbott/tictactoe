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
   "board": [[],[],[]],
   "playerName":"Your Turn!",
   "remainingXPiece":5,
   "remainingOPiece":5,
   "scoreX":0,
   "scoreY":0
 }

 var index = 0;
 while(index < 3) {
   var j = 0;
    while(j<3) {
      gameState["board"][index][j] = ""
      j+=1;
    }
    index+=1;
 }
 
 function isWin(r,c) {
  var lastPiecePlayed = gameState["board"][r][c]
  // Vertical
  if(r == 0) {
    if(gameState["board"][r+1][c] == lastPiecePlayed && gameState["board"][r+2][c] == lastPiecePlayed) {
      return true;
    }
  }

  if(r == 1) {
    if(gameState["board"][r+1][c] == lastPiecePlayed && gameState["board"][r-1][c] == lastPiecePlayed) {
      return true;
    }
  }

  if(r == 2) {
    if(gameState["board"][r-1][c] == lastPiecePlayed && gameState["board"][r-2][c] == lastPiecePlayed) {
      return true;
    }
  }

  if(c == 0) {
    if(gameState["board"][r][c+1] == lastPiecePlayed && gameState["board"][r][c+2] == lastPiecePlayed) {
      return true;
    }
  }

  if(c == 1) {
    if(gameState["board"][r][c+1] == lastPiecePlayed && gameState["board"][r][c-1] == lastPiecePlayed) {
      return true;
    }
  }

  if(c == 2) {
    if(gameState["board"][r][c-1] == lastPiecePlayed && gameState["board"][r][c-2] == lastPiecePlayed) {
      return true;
    }
  }

  if (r == 0 && c == 0) {
    if(gameState["board"][r+1][c+1] == lastPiecePlayed && gameState["board"][r+2][c+2] == lastPiecePlayed) {
      return true;
    }
  }

  if (r == 2 && c == 0) {
    if(gameState["board"][r-1][c+1] == lastPiecePlayed && gameState["board"][r-2][c+2] == lastPiecePlayed) {
      return true;
    }
  }

  if (r == 2 && c == 2) {
    if(gameState["board"][r-1][c-1] == lastPiecePlayed && gameState["board"][r-2][c-2] == lastPiecePlayed) {
      return true;
    }
  }
  
  if (r == 0 && c == 2) {
    if(gameState["board"][r+1][c-1] == lastPiecePlayed && gameState["board"][r+2][c-2] == lastPiecePlayed) {
      return true;
    }
  }

  if (r == 1 && c == 1) {
    if(gameState["board"][r-1][c-1] == lastPiecePlayed && gameState["board"][r+1][c+1] == lastPiecePlayed) {
      return true;
    }

    if(gameState["board"][r+1][c-1] == lastPiecePlayed && gameState["board"][r-1][c+1] == lastPiecePlayed) {
      return true;
    }
  }

  return false;

 }

// [
//  0: [0, 1, 2]
//  1: [0, 1, 2]
//  2: [0, 1, 2]

// ]


function draw(currentGame) {
  $(".game-board-top-left").text(gameState["board"][0][0])
  $(".game-board-top-middle").text(gameState["board"][0][1])
  $(".game-board-top-right").text(gameState["board"][0][2])
  $(".game-board-middle-left").text(gameState["board"][1][0])
  $(".game-board-center").text(gameState["board"][1][1])
  $(".game-board-middle-right").text(gameState["board"][1][2])
  $(".game-board-bottom-left").text(gameState["board"][2][0])
  $(".game-board-bottom-middle").text(gameState["board"][2][1])
  $(".game-board-bottom-right").text(gameState["board"][2][2])
  $(".player-turn").text(gameState["playerName"])
  $(".score-x").text(gameState["scoreX"])
  $(".score-y").text(gameState["scoreY"])

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

  if(isWin(r,c)) {
    alert("Winner!");
    if(gameState["player"]==2) {
      gameState["scoreX"] = gameState["scoreX"] + 1
    } 
    if(gameState["player"]==1) {
      gameState["scoreY"] = gameState["scoreY"] + 1
    }
    reset();
  }
}

function reset() {
  gameState["player"] = 1;
  gameState["board"] = [[],[],[]];
  gameState["remainingXPiece"] = 5;
  gameState["remainingOPiece"] = 5;
  gameState["playerName"] = "Your Turn!";
  var index = 0;
  while(index < 3) {
    var j = 0;
     while(j<3) {
       gameState["board"][index][j] = ""
       j+=1;
     }
     index+=1;
  } 
}


function setup() {

  $(".game-board-top-left").click(function() {
    update(0,0);
    draw(gameState);
  });
  $(".game-board-top-middle").click(function() {
    update(0,1);
    draw(gameState);
  });
  $(".game-board-top-right").click(function() {
    update(0,2);
    draw(gameState);
  });
  $(".game-board-middle-left").click(function() {
    update(1,0);
    draw(gameState);
  });
  $(".game-board-center").click(function() {
    update(1,1);
    draw(gameState);
  });
  $(".game-board-middle-right").click(function() {
    update(1,2);
    draw(gameState);
  });
  $(".game-board-bottom-left").click(function() {
    update(2,0);
    draw(gameState);
  });
  $(".game-board-bottom-middle").click(function() {
    update(2,1);
    draw(gameState);
  });
  $(".game-board-bottom-right").click(function() {
    update(2,2);
    draw(gameState);
  });
  $(".button").click(function() {
    gameState["scoreX"] = 0;
    gameState["scoreY"] = 0;
    reset();
    draw(gameState);
  });
}










// IGNORE
$(document).ready(function() {
  setup();
  draw();
});