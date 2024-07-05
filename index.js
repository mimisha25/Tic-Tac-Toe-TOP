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
    }

    const playGame = (function (){
        const player =()=>{ container.addEventListener("click", function(e){
            let targetCell = e.target;
            if(targetCell.innerText === ""){
                currentPlayer = currentPlayer === "X" ? "0" : "X";
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
                }else  if (cells[comb[i][0]].innerText === "0" &&
                    cells[comb[i][1]].innerText === "0" &&
                    cells[comb[i][2]].innerText === "0") {
                        cells[comb[i][0]].classList.add('active');
                        cells[comb[i][1]].classList.add('active');
                        cells[comb[i][2]].classList.add('active');  
                        winnerResult.innerText = 'Winner is 0';
            }
            }}

document.querySelector(".restart").addEventListener("click", function(){
const cells = document.querySelectorAll(".cell");
cells.forEach(cell=>{
    cell.innerText="";
    cell.classList.remove('active'); 
})
})