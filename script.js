let Xturn = 0;
let Xchoice = [];
let Ochoice = [];

function getPlayerChoice(num) 
{
    if (Xturn === 0) 
    {
        Xchoice.push(num);
        console.log("X choice: " + Xchoice);
        updateXPlay(num);
        Xturn = 1;
    } 
    else 
    {
        Ochoice.push(num);
        console.log("O choice: " + Ochoice);
        updateOPlay(num);
        Xturn = 0;
    }
}

function updateXPlay(num) 
{
    var XbuttonElement = document.querySelector(`.btn-${num}`);
    XbuttonElement.textContent = "X";
}

function updateOPlay(num)
{
    var ObuttonElement = document.querySelector(`.btn-${num}`);
    ObuttonElement.textContent = "O";
}