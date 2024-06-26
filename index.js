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


