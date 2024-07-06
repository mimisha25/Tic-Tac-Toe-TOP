let startButton =  document.querySelector(".new-game"),
container = document.querySelector(".container"),
winnerResult = document.querySelector(".winner"),
currentPlayer = "X";

    startButton.addEventListener("click", createGameBoard);


    function createGameBoard(){

        for (let i=0; i<9; i++){
            const cells = document.createElement("div");
            cells.classList.add("cell");
            container.appendChild(cells);
        }
        if (container.childElementCount !== 0) {
            restart();
        }
    }

    const playGame = (function (){
        const player =()=>{ container.addEventListener("click", function(e){
            let targetCell = e.target;
            if(targetCell.innerText === ""){
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                currentPlayer === "X"?targetCell.classList.add("cross"):targetCell.classList.add("circle");
                targetCell.innerText=currentPlayer;
            }
            winner();   
        })};
        return {player};
        })();
         playGame.player(); 


function winner(){
    const comb = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
            ];
            for (let i = 0; i < comb.length; i++) {
                const cells = document.querySelectorAll(".cell");
                if (cells[comb[i][0]].innerText === "X" &&
                    cells[comb[i][1]].innerText === "X" &&
                    cells[comb[i][2]].innerText === "X") {
                        cells[comb[i][0]].classList.add('active');
                        cells[comb[i][1]].classList.add('active');
                        cells[comb[i][2]].classList.add('active');  
                        winnerResult.innerText = 'Winner is X';
                }else  if (cells[comb[i][0]].innerText === "O" &&
                    cells[comb[i][1]].innerText === "O" &&
                    cells[comb[i][2]].innerText === "O") {
                        cells[comb[i][0]].classList.add('active');
                        cells[comb[i][1]].classList.add('active');
                        cells[comb[i][2]].classList.add('active');  
                        winnerResult.innerText = 'Winner is O';
            }
            }}

document.querySelector(".restart").addEventListener("click", restart);
function restart(){
    const cells = document.querySelectorAll(".cell");
cells.forEach(cell=>{
    cell.innerText="";
    cell.classList.remove('active'); 
    winnerResult.innerText="Let's Play!";
})
}