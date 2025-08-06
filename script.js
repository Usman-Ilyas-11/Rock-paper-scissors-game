const choices=["rock","paper","scissors"];
const pdisp=document.getElementById("player");
const cdisp=document.getElementById("comp");
const res=document.getElementById("res");

function play(pchoice){
    const cchoice=choices[Math.floor(Math.random()*3)];
    let result="";

    if(pchoice===cchoice){
        result="It's a Tie";
    }
    else{
        switch(pchoice){
            case "rock":
                result=(cchoice==="scissors")?"You win":"You Loose";
                break;
            case "paper":
                result=(cchoice==="rock")?"You win":"You Loose";
                break;
            case "scissors":
                result=(cchoice==="paper")?"You win":"You Loose";
                break;
        }
    }
    pdisp.textContent=`Player:${pchoice}`;
    cdisp.textContent=`Computer:${cchoice}`;
    res.textContent=result;
}