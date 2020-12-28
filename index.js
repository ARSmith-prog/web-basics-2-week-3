const battleship = () => {

  const player1 = {
    name: "",
    shipCount:  4,
    gameBoard:
    [[0, 0, 0, 0], 
     [0, 0, 0, 0], 
     [0, 0, 0, 0], 
     [0, 0, 0, 0]]

  };

const player2 = {
    name: "",
    shipCount: 4,
    gameBoard:
    [[0, 0, 0, 0], 
     [0, 0, 0, 0], 
     [0, 0, 0, 0], 
     [0, 0, 0, 0]]

};

player1.name = prompt('Enter the name for player1');
player2.name = prompt('Enter the name for player2');

let winner;

function ranNum() {
return Math.floor(Math.random() * 4);
}
  

const shipplacement =(player) => {


for (i =0; i < 4; i++) {

  let x =ranNum();
  let y = ranNum();

if (player.gameBoard[x][y] === 0) {
player.gameBoard[x][y] = 1;
}else {i--;}

}


   /* do {                                //do while loop that somewhat works
        let x =ranNum();
        let y = ranNum();

    if (player.gameBoard[x][y] === 0) {
      player.gameBoard[x][y] = 1;
      player.shipCount++;
    }else {player.shipCount--;}

    }while (player.shipCount <= 3);*/


shipplacement(player1);
shipplacement(player2);


 console.log(`${player1.name} game board:`, 
 player1.gameBoard[0], 
 player1.gameBoard[1], 
 player1.gameBoard[2], 
 player1.gameBoard[3],);
  console.log(`${player2.name} game board:`, 
  player2.gameBoard[0], 
  player2.gameBoard[1], 
  player2.gameBoard[2], 
  player2.gameBoard[3],);



  function getMove(p1, p2) {

    let x = prompt(`${p1.name} Enter x coordinated from 0-3`);
    let y = prompt(`${p1.name} Enter y coordinated from 0-3`);


      if ( p2.gameBoard[x][y] === 1){
          p2.gameBoard[x][y] = 0;
          alert('thats a hit!');
          p2.shipCount --;
      }else{ 
          alert('miss!');
      }
           if ( p2.shipCount > 0){
              if (p2 == player2){
                getMove(player2, player1);
              } else {
                getMove(player1, player2)
              }
            }
            else {
              winner = p1.name;

              //return winner;           
            }
  }
 
  getMove(player1, player2);

return `the winner is, ${winner}`;
         
}
}

const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
