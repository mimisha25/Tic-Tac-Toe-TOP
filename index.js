let startButton =  document.querySelector(".new-game"),
    container = document.querySelector(".container")
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
            currentPlayer = currentPlayer === "X" ? "0" : "X";
            targetCell.innerText=currentPlayer;     
        })};
        return {
            player
        };
        })();
         playGame.player(); 

