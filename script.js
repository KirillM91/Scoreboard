let players = [];
let playerInputField = document.getElementById("playerName");
let playerInputButton = document.getElementById("newPlayerButton");
let scoreboardSection = document.getElementById("scoreboardSection");

//Ranadom färg
function randomHsl() {
    return 'hsla(' + (Math.random() * 360) + ', 70%, 70%, 1)';
}

//Lägger till spelare till players array med score 0
playerInputButton.addEventListener("click", () => {
    scoreboardSection.innerHTML="";

    let player = {
        playerName: playerInputField.value,
        score: 0
    }
    players.push(player)

    
    playerInputField.value="";
      

    //Skapar player fältet
    for (let player in players){ 
        let playerField = document.createElement("div"); 
            playerField.className = "playerField";
            playerField.id = players[player].playerName

        let thePlayerText = document.createElement("span");
            thePlayerText.innerText = "Player: ";
            thePlayerText.id = "thePlayerText";
        //Spelare
        let playerNameDisplay = document.createElement("span");
            playerNameDisplay.innerText = players[player].playerName;
            playerNameDisplay.id = "playerNameDisplay";
            playerNameDisplay.style.color = randomHsl();            

        //Score
        let playerScoreDisplay = document.createElement("span");
            playerScoreDisplay.innerText = `Score: ${players[player].score}`;
            playerScoreDisplay.id = "playerScoreDisplay"+players[player].playerName;
            playerScoreDisplay.className ="playerScoreDisplay";

        //Plus+ Knapp
        let addScore = document.createElement("button");
            addScore.innerText = "+1"
            addScore.className = "addScore";

        //Minus- Knapp
        let subScore = document.createElement("button");
            subScore.innerText = "-1"
            subScore.className = "subScore";
        
        playerField.append(thePlayerText, playerNameDisplay, playerScoreDisplay, addScore, subScore);
        scoreboardSection.append(playerField);       
    }
});



//Evenlistener på hela scoreboarden
scoreboardSection.addEventListener("click", (e) => {
    //Hämtar parent node ID som ska vara lika med spelar namnet
    let rightPlayer = e.target.parentNode.id;
    let btnClassName = e.target.className;
    
    //Event listener aktiveras bara om elementet har dessa klasser
    if (btnClassName === "addScore" || btnClassName === "subScore"){
        //Hittar spelaren i array som har samma namn som parent ID
        let chosenPlayer = players.find(({playerName}) => playerName === rightPlayer);
        console.log(chosenPlayer)
    
        //Lägger till och uppdaterar score
        if(btnClassName === "addScore"){            
            chosenPlayer.score++
            document.getElementById("playerScoreDisplay"+chosenPlayer.playerName).innerText = `Score: ${chosenPlayer.score}`;
        }
        //Subtraherar och uppdaterar score 
        else {
            chosenPlayer.score--
            document.getElementById("playerScoreDisplay"+chosenPlayer.playerName).innerText = `Score: ${chosenPlayer.score}`;
        }
    }   

});





console.log(players)