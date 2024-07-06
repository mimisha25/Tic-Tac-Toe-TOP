let container = document.querySelector(".container"),
    dialog = document.querySelector("dialog"),
    winnerText = document.querySelector(".dialog-text"),
    currentPlayer = "X"


    const playGame = (function (){
        const player =()=>{ container.addEventListener("click", function(e){
            let targetCell = e.target;
            if(targetCell.innerText === ""){
                currentPlayer = currentPlayer === "X" ? "O" : "X";
                currentPlayer === "X"?targetCell.classList.add("cross"):targetCell.classList.add("circle");
                targetCell.innerText=currentPlayer;
                winner(); 
            }  
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
                let a=cells[comb[i][0]];
                let b=cells[comb[i][1]];
                let c=cells[comb[i][2]];
                if (a.innerHTML === "X" && b.innerHTML === "X" && c.innerHTML === "X") {
                        a.classList.add('active');
                        b.classList.add('active');
                        c.classList.add('active');  
                        winnerDialog();
                        winnerText.innerText = "Winner is X!"
                }else  if (a.innerHTML === "O" && b.innerHTML === "O" && c.innerHTML === "O") {
                    a.classList.add('active');
                    b.classList.add('active');
                    c.classList.add('active');   
                        winnerDialog();
                        winnerText.innerText = "Winner is O!"
            }else if(draw()){
                winnerDialog();
                winnerText.innerText = "It's a Draw!" 
            }
            }}

document.querySelector(".restart").addEventListener("click", restart);
function restart(){
    const cells = document.querySelectorAll(".cell");
cells.forEach(cell=>{
    cell.innerText="";
    cell.classList.remove('active'); 
})
}

function winnerDialog(){
dialog.showModal();
document.querySelector(".dialog").addEventListener("click", (e)=>{
e.preventDefault();
dialog.close();
restart();
})
}
const cells = Array.from(document.querySelectorAll(".cell"));

function draw(){
    const cells = Array.from(document.querySelectorAll(".cell"));
    for(let i = 0; i < cells.length; i++) {
        if(cells[i].textContent === '') {
            return false;
        }
    }
    return true
}