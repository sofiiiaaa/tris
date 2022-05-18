const btnUno = document.getElementById("btn-1");
const btnDue = document.getElementById("btn-2");
const btnTre = document.getElementById("btn-3");
const btnQuattro = document.getElementById("btn-4");
const btnCinque = document.getElementById("btn-5");
const btnSei = document.getElementById("btn-6");
const btnSette = document.getElementById("btn-7");
const btnOtto = document.getElementById("btn-8");
const btnNove = document.getElementById("btn-9");

const buttons = document.querySelectorAll(".button"); //ok
const turnOf = document.getElementById("gamer"); //ok
const winnerMessage = document.getElementById("message-of-win");//ok
const startAgain = document.getElementById("start-again");  //ok

let count = 0;
let flag=false;

buttons.forEach(element => element.addEventListener("click", addSign, )); 


function addSign(e){
    if (e.target.innerHTML !== ""){
        alert("questa cella è già stata selezionata!");
        count=count-1;
    }
    if (count%2===0 || count===0){
        turnOf.innerHTML = "primo giocatore";
        e.target.innerHTML = "O";
    } else {
        turnOf.innerHTML = "secondo giocatore";
        e.target.innerHTML = "X";
    }
    checkWin();
    count+=1; 
    
    ifNoneWin(e);
}
    
function checkWin(){

    if((btnUno.innerHTML===btnDue.innerHTML && btnDue.innerHTML===btnTre.innerHTML) && (btnUno.innerHTML==="X" || btnUno.innerHTML==="O")){
        alert("Il " + turnOf.innerHTML + " ha vinto!! Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();

    } else if((btnQuattro.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnSei.innerHTML) && (btnQuattro.innerHTML==="X" || btnQuattro.innerHTML==="O")){
      alert("Il " + turnOf.innerHTML + " ha vinto!! Gioca di nuovo! ");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();
    
    } else if((btnSette.innerHTML===btnOtto.innerHTML && btnOtto.innerHTML===btnNove.innerHTML) && (btnSette.innerHTML==="X" || btnSette.innerHTML==="O")){
       alert("Il " + turnOf.innerHTML + " ha vinto!!  Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();

    }else if((btnUno.innerHTML===btnQuattro.innerHTML && btnQuattro.innerHTML===btnSette.innerHTML) && (btnUno.innerHTML==="X" || btnUno.innerHTML==="O")){
       alert("Il " + turnOf.innerHTML + " ha vinto!!  Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();

    }else if((btnDue.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnOtto.innerHTML) && (btnDue.innerHTML==="X" || btnDue.innerHTML==="O")){
       alert("Il " + turnOf.innerHTML + " ha vinto!!  Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();

    }else if((btnTre.innerHTML===btnSei.innerHTML && btnSei.innerHTML===btnNove.innerHTML) && (btnTre.innerHTML==="X" || btnTre.innerHTML==="O")){
       alert("Il " + turnOf.innerHTML + " ha vinto!!  Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();

    }else if((btnUno.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnNove.innerHTML) && (btnUno.innerHTML==="X" || btnUno.innerHTML==="O")){
       alert("Il " + turnOf.innerHTML + " ha vinto!!  Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();

    }else if((btnTre.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnSette.innerHTML) && (btnTre.innerHTML==="X" || btnTre.innerHTML==="O")){
       alert("Il " + turnOf.innerHTML + " ha vinto!!  Gioca di nuovo!");
        flag=true;
        // winnerMessage.innerHTML = "il " + turnOf.innerHTML + " ha vinto!! Clicca su 'start again' per giocare di nuovo!";
        resetGame();
    } 
    
    
        
}



startAgain.addEventListener("click", resetGame);
function resetGame(e){
    count=0;
    console.log(buttons)
     buttons.forEach((element) => element.innerHTML = "");
     turnOf.innerHTML = "" ;
     winnerMessage.innerHTML = "chi vincerà?";
    
}



   function ifNoneWin(e){
       if (buttons.every((element)=> element != "")){
          console.log("hii");
           alert( "pareggio! Gioca di nuovo!");
       }
   }