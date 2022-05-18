let btnUno = document.getElementById("btn-1");
// console.log(btnUno);
let btnDue =document.getElementById("btn-2");

let btnTre=document.getElementById("btn-3");

let btnQuattro=document.getElementById("btn-4");

let btnCinque=document.getElementById("btn-5");

let btnSei=document.getElementById("btn-6");

let btnSette=document.getElementById("btn-7");

let btnOtto=document.getElementById("btn-8");

let btnNove=document.getElementById("btn-9");

let buttons= document.querySelectorAll(".button"); //ok
// console.log(buttons)

let turnOf= document.getElementById("gamer"); //ok
console.log(turnOf.innerHTML);

let winnerMessage= document.getElementById("message-of-win");
// console.log(winnerMessage);

let startAgain=document.getElementById("start-again");  //ok
// console.log(startAgain);

// outerText: "1"
// innerHTML: "1"
// innerText: "1"

buttons.forEach( element => element.addEventListener("click", addSign)); 
let count=0;
// let flag=false;
// let giocatore="";

function addSign(e){
    // console.log(e.target)
    // console.log(i.innerHTML="X");
    if( e.target.innerHTML!==""){
        alert("questa cella è già stata selezionata!");
    }
       if(count%2===0 || count===0){
           console.log(count)
           turnOf.innerHTML="primo giocatore";
           e.target.innerHTML="O";
        } else{
            turnOf.innerHTML="secondo giocatore";
            e.target.innerHTML="X";
            console.log(count)
        }
        checkWin();
        count+=1;
    }


    
    function checkWin(e){
        // console.log(btnUno.innerHTML, btnDue.innerHTML, btnTre.innerHTML)
        // console.log(btnUno.innerHTML== btnDue.innerHTML== btnTre.innerHTML)
        // console.log(winnerMessage.innerHTML)
        if((btnUno.innerHTML===btnDue.innerHTML && btnDue.innerHTML===btnTre.innerHTML) && (btnUno.innerHTML==="X" || btnUno.innerHTML==="O")){
      winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";

    } else if((btnQuattro.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnSei.innerHTML) && (btnQuattro.innerHTML==="X" || btnQuattro.innerHTML==="O")){
       winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";
    
    } else if((btnSette.innerHTML===btnOtto.innerHTML && btnOtto.innerHTML===btnNove.innerHTML) && (btnSette.innerHTML==="X" || btnSette.innerHTML==="O")){
       winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";

    }else if((btnUno.innerHTML===btnQuattro.innerHTML && btnQuattro.innerHTML===btnSette.innerHTML) && (btnUno.innerHTML==="X" || btnUno.innerHTML==="O")){
         winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";

    }else if((btnDue.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnOtto.innerHTML) && (btnDue.innerHTML==="X" || btnDue.innerHTML==="O")){
        winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";

    }else if((btnTre.innerHTML===btnSei.innerHTML && btnSei.innerHTML===btnNove.innerHTML) && (btnTre.innerHTML==="X" || btnTre.innerHTML==="O")){
        winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";

    }else if((btnUno.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnNove.innerHTML) && (btnUno.innerHTML==="X" || btnUno.innerHTML==="O")){
        winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";

    }else if((btnTre.innerHTML===btnCinque.innerHTML && btnCinque.innerHTML===btnSette.innerHTML) && (btnTre.innerHTML==="X" || btnTre.innerHTML==="O")){
        winnerMessage.innerHTML= "il " + turnOf.innerHTML + " ha vinto!!";
    } 
        
}



startAgain.addEventListener("click", resetGame);
function resetGame(e){
    count=0;
    console.log(buttons)
     buttons.forEach((element) => element.innerHTML="");
     turnOf.innerHTML="" ;
     winnerMessage.innerHTML= "chi vinvcerà?";
    
}



