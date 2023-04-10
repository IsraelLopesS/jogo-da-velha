document.addEventListener('DOMContentLoaded', ()=>{
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', Click);
    })
})



function Click(event){
    
    let square = event.target;
    let postion = square.id;
    let res = document.getElementById("resultado");

    if(move(postion)){
        res.innerHTML ="<h1>Fim do jogo!"
    }
    upsquare(postion);

}
function upsquare(postion){
    let square = document.getElementById(postion.toString());
    let symbol = board[postion]
    square.innerHTML = '<div class='+symbol+'></div>';
}
function reset(){
    location.reload()
}