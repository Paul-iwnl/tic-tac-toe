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
            updateXPlay(num);
            updateInformation();
            Xturn = 1;
        } 
        else 
        {
            Ochoice.push(num);
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
    checkDrawCondition();
}

function updateOPlay(num)
{
    var ObuttonElement = document.querySelector(`.btn-${num}`);
    ObuttonElement.textContent = "O";
    checkOWinCondition();
    checkDrawCondition();
}

function checkXWinCondition()
{
    if(Xchoice.includes(1) && Xchoice.includes(2) && Xchoice.includes(3))
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(4) && Xchoice.includes(5) && Xchoice.includes(6)) 
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(7) && Xchoice.includes(8) && Xchoice.includes(9)) 
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(1) && Xchoice.includes(4) && Xchoice.includes(7)) 
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(2) && Xchoice.includes(5) && Xchoice.includes(8)) 
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(3) && Xchoice.includes(6) && Xchoice.includes(9)) 
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(1) && Xchoice.includes(5) && Xchoice.includes(9)) 
    {
        displayPopup("X wins !!");
    }
    if (Xchoice.includes(3) && Xchoice.includes(5) && Xchoice.includes(7)) 
    {
        displayPopup("X wins !!");
    }
}

function checkOWinCondition()
{
    if (Ochoice.includes(1) && Ochoice.includes(2) && Ochoice.includes(3)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(4) && Ochoice.includes(5) && Ochoice.includes(6)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(7) && Ochoice.includes(8) && Ochoice.includes(9)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(1) && Ochoice.includes(4) && Ochoice.includes(7)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(2) && Ochoice.includes(5) && Ochoice.includes(8)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(3) && Ochoice.includes(6) && Ochoice.includes(9)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(1) && Ochoice.includes(5) && Ochoice.includes(9)) 
    {
        displayPopup("O wins !!");
    }
    if (Ochoice.includes(3) && Ochoice.includes(5) && Ochoice.includes(7)) 
    {
        displayPopup("O wins !!");
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

function displayPopup(message) 
{
    const popup = document.getElementById("popup");
    const popuptext = document.getElementById("popup-text");
    const overlay = document.getElementById("overlay");
    var restartButton = document.getElementById("play-again-btn");
    popuptext.innerText = message;
    popup.classList.remove("hidden");
    overlay.classList.add("active");
    restartButton.addEventListener("click", function() 
    {
        location.reload();
    });
}

function checkDrawCondition()
{
    const buttonElement = document.querySelectorAll(".playable-area-btn");
    for (var i = 0; i < buttonElement.length; i++)
    {
        if(buttonElement[i].textContent == "")
        {
            return;
        }
    }
    displayPopup("It is a draw !");
}