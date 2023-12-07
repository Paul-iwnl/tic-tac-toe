let Xturn = 0;
let Xchoice = [];
let Ochoice = [];

function getPlayerChoice(num) 
{
    var buttonElement = document.querySelector(`.btn-${num}`);
    if(buttonElement.textContent == "")
    {
        if (Xturn === 0) 
        {
            Xchoice.push(num);
            console.log("X choice: " + Xchoice);
            updateXPlay(num);
            updateInformation();
            Xturn = 1;
        } 
        else 
        {
            Ochoice.push(num);
            console.log("O choice: " + Ochoice);
            updateOPlay(num);
            updateInformation();
            Xturn = 0;
        }
    }
}

function updateXPlay(num) 
{
    var XbuttonElement = document.querySelector(`.btn-${num}`);
    XbuttonElement.textContent = "X";
    checkXWinCondition();
}

function updateOPlay(num)
{
    var ObuttonElement = document.querySelector(`.btn-${num}`);
    ObuttonElement.textContent = "O";
    checkOWinCondition();
}

function checkXWinCondition()
{
    if(Xchoice.includes(1) && Xchoice.includes(2) && Xchoice.includes(3))
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(4) && Xchoice.includes(5) && Xchoice.includes(6)) 
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(7) && Xchoice.includes(8) && Xchoice.includes(9)) 
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(1) && Xchoice.includes(4) && Xchoice.includes(7)) 
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(2) && Xchoice.includes(5) && Xchoice.includes(8)) 
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(3) && Xchoice.includes(6) && Xchoice.includes(9)) 
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(1) && Xchoice.includes(5) && Xchoice.includes(9)) 
    {
        console.log("X wins !!");
    }
    if (Xchoice.includes(3) && Xchoice.includes(5) && Xchoice.includes(7)) 
    {
        console.log("X wins !!");
    }
}

function checkOWinCondition()
{
    if (Ochoice.includes(1) && Ochoice.includes(2) && Ochoice.includes(3)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(4) && Ochoice.includes(5) && Ochoice.includes(6)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(7) && Ochoice.includes(8) && Ochoice.includes(9)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(1) && Ochoice.includes(4) && Ochoice.includes(7)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(2) && Ochoice.includes(5) && Ochoice.includes(8)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(3) && Ochoice.includes(6) && Ochoice.includes(9)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(1) && Ochoice.includes(5) && Ochoice.includes(9)) 
    {
      console.log("O wins !!");
    }
    if (Ochoice.includes(3) && Ochoice.includes(5) && Ochoice.includes(7)) 
    {
      console.log("O wins !!");
    }
}

function updateInformation() 
{
    var turnInformation = document.querySelector(".information-on-turn");
    if (Xturn === 1) 
    {
        turnInformation.textContent = "X's turn";
    } 
    else 
    {
        turnInformation.textContent = "O's turn";
    }
}
