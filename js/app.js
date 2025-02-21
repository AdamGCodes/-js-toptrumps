// CARD TRUMPS MAKR 2.1

// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const p1 = "p1"
const cpu = "cpu"
let players = [cpu, p1]
let p1CardData;
let cpuCardData;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CACHED ELEMENT REFERENCES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Cached Elements for P1 and CPU Cards
const categorySelection = document.querySelectorAll(".categoryBtn");
const cpuCategories = document.querySelectorAll(".cpu-category");

//Function to cache card elements dynamically
const getCardElements = (player) => {
    return{
        title: document.querySelector(`#${player}Title`),
        img: document.querySelector(`#${player}Img`),
        info: [...Array(5)].map((_,) => document.querySelector(`#${player}Info${i+1}`))
    };
};

// Chached Button Elements
const nextHandBtn = document.querySelector("#nextHandBtn");
const startBtn = document.querySelector("#start-game");
const howToPlayBtn = document.querySelector("#how-to-play-btn");
const closeBtn = document.querySelector('#close-btn')

// Other Cached Elements
const howToPlayBox = document.querySelector(".how-to-play-box");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Global Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hideNextHandBtn = () => {
    document.getElementById("nextHandBtn").style.display = "none"
}

//Show/hide How To Play Info Box
const handleHowToPlay = (event) => {
    console.log("How2 btn clicked")
    howToPlayBox.classList.toggle("show-how-to-play-box");
}

//SLEEP FUNCTION
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Main Game Logic >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// +++++++++++++++++++++++++++++++++++++ GAME PLAY FUNCTIONS +++++++++++++++++++++++++++++++++++++
// TEMP MISC GAME PLAY FUNCTIONS (Let's see if these are needed an if so where they belong)


// +++++++++++++++++++++++++++++++++++++ INIT +++++++++++++++++++++++++++++++++++++
//Get Category Names for the deck that has been selected (This will change in a multiple decks mode to will be dependent on deck choice)
const getCategories = () => {
    keys = Object.keys(currentDeck[0]);
    console.log(keys)
}
//Render Category info to the cards on screen
const renderCategories = () => {
    //Render to P1 Cards
    categorySelection.forEach((btn, index) => {
        if (index < keys.length - 1) { // Adjusting for 'keys' alignment 
            btn.innerHTML = keys[index + 1];
        }
    })
    //Render to CPU Cards 
    const cpuCategories = [cpuCat1, cpuCat2, cpuCat3, cpuCat4, cpuCat5];
    cpuCategories.forEach((cpuCat, index) => {
        if (index < keys.length - 1) {// Adjusting for 'keys' alignment
            cpuCat.innerHTML = keys[index + 1];
        }
    });
};

const init = () => {
    getCategories()
    renderCategories()
    hideNextHandBtn()
}
init()


// +++++++++++++++++++++++++++++++++++++ START GAME +++++++++++++++++++++++++++++++++++++

//Shuffle Deck

const shuffle = (currentDeck) => {
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]]
    }
    return currentDeck;
}

//Deal Deck (will need amending for aditional players)
const deal = () => {
    p1Deck = shuffledDeck.filter((element, index) => index % 2 === 0);
    cpuDeck = shuffledDeck.filter((element, index) => index % 2 != 0);
}

//Select which player goes first
const whoStarts = () => {
    const r = Math.floor(Math.random() * 2); 
    let whosTurn = players[r];
    console.log(whosTurn)
    return whosTurn;
}

const handleStartGame = () => {
    playGame = true
    shuffledDeck = shuffle(currentDeck);
    deal();
    whosTurn = whoStarts(players);
    handleGamePlay(whosTurn, playGame);
};


// +++++++++++++++++++++++++++++++++++++ PLAY GAME +++++++++++++++++++++++++++++++++++++

const renderCardInfo = () => {
    // Render P1 Cards
    p1Title.innerHTML = p1CardData.Name;
    p1Img.innerHTML = `<img src="${p1CardData.Image}">`;
    p1Info1.innerHTML = p1CardData.Speed;
    p1Info2.innerHTML = p1CardData.Firepower;
    p1Info3.innerHTML = p1CardData.Defense;
    p1Info4.innerHTML = p1CardData.Crew;
    p1Info5.innerHTML = p1CardData.CargoCapacity;
    // console.log(p1CardData)

    // Render CPU Cards
    cpuTitle.innerHTML = `${cpuCardData.Name}`;
    cpuImg.innerHTML = `<img src="${cpuCardData.Image}">`;
    cpuInfo1.innerHTML = `${cpuCardData.Speed}`;
    cpuInfo2.innerHTML = `${cpuCardData.Firepower}`;
    cpuInfo3.innerHTML = `${cpuCardData.Defense}`;
    cpuInfo4.innerHTML = `${cpuCardData.Crew}`;
    cpuInfo5.innerHTML = `${cpuCardData.CargoCapacity}`;
    // console.log(cpuCardData)
}

// ------------------------ Handle P1 Input & Functions ------------------------------
async function handleP1Input() {
    return new Promise((resolve) => {
        categorySelection.forEach((categoryBtn) => {
            categoryBtn.addEventListener('click', function handleSelection(event) { //Was a seperate fucntion that was called but now is defined in the click event.
                let index = parseInt(event.target.id.slice(-1)); //using slice -1 to get the last digit from the ID this is the only part we require to index. parseInt is converting it to a number for use when used as index.
                let key = keys[index]; //Getting the key from the keys array useing [index] with the above means we are selecting the key dynamically.

                SelectedKey = key; // Stores the selected key
                playerSelected = p1CardData[key]; // Get p1's value
                cpuSelected = cpuCardData[key]; // Gets the CPU's value

                categorySelection.forEach((btn) => btn.removeEventListener('click', handleSelection));
                console.log(SelectedKey, playerSelected, cpuSelected);
                resolve({ SelectedKey, playerSelected, cpuSelected }); // 
            })
        })
    })
    // console.log("It's player 1's Turn")
    // messageBox.textContent = `Player 1's turn. Make your selection`    
}



 // ----------------------  Handle  CPU Selection & Functions ---------------------------
async function handleCpuSelection() {
    console.log("It's the CPU's Turn")
    keysArray = Object.keys(cpuCardData);
    valuesArray = Object.values(cpuCardData);
    r = random(0, keysArray.length - 1) //Have used this instead of 1-6 to make more scaleable. 
    SelectedKey = `${keysArray[r]}`;
    cpuSelected = parseInt(`${valuesArray[r]}`);
    playerSelected = p1CardData[SelectedKey]
    console.log(SelectedKey, cpuSelected, playerSelected)
    return {SelectedKey, cpuSelected, playerSelected}
}

//Random Function
const random = (min, max) => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

//Evaluate the result at the end of each hand and call the relevent subfuction
const result = () => {
//     // let var1 = convertTopTrump(playerSelected);
//     // let var2 = convertTopTrump(cpuSelected);
//     let var1 = playerSelected;
//     console.log(var1)
//     let var2 = cpuSelected;
//     console.log(var2)
//     let var3 = null
//     if(whosTurn === p1){
//         var3 = playerSelectedKey
//     }else if(whosTurn === cpu){
//         var3 = cpuSelectedKey
//     }
    if ( playerSelected > cpuSelected) {
        // winDrawCards(p1Deck) NEED TO BRING THIS IN ONCE IVE REINSTATED DRAW FUNCTION
        p1Deck.push(p1Deck.shift())
        p1Deck.push(cpuDeck.shift())
//         // convertTopTrump(var1)
//         // convertTopTrump(var2)
//         messageBox.innerHTML = `<strong>Player 1:</strong> <br>
//         ${var3} ${var1}<br>
//         <strong>Computer</strong>  <br>
//         ${var3} ${var2}<br>
//         You won this hand!`
        whosTurn = p1
        console.log("P1 was the winner")
//         // sleep(3000).then(() => { nextTurn() });
    } else if (playerSelected < cpuSelected) {
        // winDrawCards(cpuDeck) NEED TO BRING THIS IN ONCE IVE REINSTATED DRAW FUNCTION
        cpuDeck.push(cpuDeck.shift())
        cpuDeck.push(p1Deck.shift())
//         // convertTopTrump(var1)
//         // convertTopTrump(var2)
//         messageBox.innerHTML = `<strong>Player 1:</strong> <br>
//         ${var3} ${var1}<br>
//         <strong>Computer</strong>  <br>
//         ${var3}  ${var2}<br>
//         You lost this hand! <br>
//         Press for next hand <br> 
//         &#8681 &#8681 &#8681 &#8681 &#8681`
//         console.log("Press for next hand")
        whosTurn = cpu
        console.log("CPU was the winner.")
        //         // nextTurn()
    } else {
        console.log("It's a draw.")
//         // convertTopTrump(var1)
//         // convertTopTrump(var2)
//         messageBox.innerHTML = `<strong>Player 1:</strong>  <br>
//         ${var3} ${var1}<br>
//         <strong>Computer</strong>  <br>
//         ${var3} ${var2} <br>
//         It's a draw <br>
//         Both cards have been put in a "pot"<br>winner of the next hand takes the cards in the pot<br>as well as the cards from the hand.`
//         sleep(3000).then(() => { handleDraw() });
//         // sleep(6000).then(() => { nextTurn() });
    }
    console.log
//     checkDecks()
}
//After every hand, check to see if the game has ended and there is a winner
const checkDecks = () => {
    console.log(p1Deck.length, cpuDeck.length)
    if (p1Deck.length < 1 || cpuDeck.length < 1) {
        playGame = false
    } else {
        return
    }
}

// -------------------  Main Handle Game Play Function -------------------------
async function handleGamePlay() {
    while(playGame === true){
        console.log(`Who's Turn? It's ${whosTurn}'s Turn`)
        p1CardData = p1Deck[0]
        cpuCardData = cpuDeck[0]
        console.log(p1CardData)
        console.log(cpuCardData)
        renderCardInfo()
        if(whosTurn === p1){
            const selection = await handleP1Input(); // Refactored wait for player input on player turn
            console.log("In result slot", selection, SelectedKey, playerSelected, cpuSelected)
            result(selection) //Now we can process the turn after selection. 
            checkDecks()

        } else if(whosTurn === cpu) {
            const selection = await handleCpuSelection()
            console.log("In result slot", selection, SelectedKey, playerSelected, cpuSelected)
            result(selection)
            checkDecks()

        } else {
            console.log("We have experienced an error the game will be terminated sorry about that.")
        }
        continue
    }
}



// +++++++++++++++++++++++++++++++++++++ END GAME +++++++++++++++++++++++++++++++++++++



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Start Game
startBtn.addEventListener('click', handleStartGame)

//Next Hand Button
// nextHandBtn.addEventListener('click', handleCpuHand)

//End Game
endGameBtn.addEventListener('click', handleEndGame)

//View How To Play Info
howToPlayBtn.addEventListener('click', handleHowToPlay)

//Close How To Play Info
closeBtn.addEventListener('click', handleHowToPlay)



// // CARD TRUMPS MARK 2.1
// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let whosTurn;
// let playGame;
// let keys;
// let shuffledDeck;
// let p1Deck;
// let cpuDeck;

// let playerSelected;
// let playerSelectedKey;
// let cpuSelected;
// let cpuSelectedKey;
// let drawContainer = [];



// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CACHED ELEMENT REFERENCES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// //Other cached Elements
// const messageBox = document.querySelector("#message");


// const endGameBtn = document.querySelector("#end-game");
// const nextHandBtn = document.querySelector("#nextHandBtn");


// //+++++++++++++++++++++++++++++++++++++ OTHER FUNCTIONS +++++++++++++++++++++++++++++++++++++

// //SLEEP FUNCTION (Currently used to pause between user winning hands)
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// //Random Function
// const random = (min, max) => {
//     const minCeiled = Math.ceil(1);
//     const maxFloored = Math.floor(6);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
// }

// // Show/Hide and Enable/Disable Game Control Buttons (Form of input validation and to help direct flow of gameplay)
// const hideNextHandBtn = () => {
//     document.getElementById("nextHandBtn").style.display = "none"
// }
// const showNextHandBtn = () => {
//     document.getElementById("nextHandBtn").style.display = "block"
// }
// const disableUserBtns = () => {
//     categorySelection.forEach((categoryBtn) => {
//         categoryBtn.disabled = true;
//     })
// }
// const enableUserBtns = () => {
//     categorySelection.forEach((categoryBtn) => {
//         categoryBtn.disabled = false;
//     })
// }

// //+++++++++++++++++++++++++++++++++++++ INIT +++++++++++++++++++++++++++++++++++++


// //+++++++++++++++++++++++++++++++++++++ Start Game +++++++++++++++++++++++++++++++++++++



// //+++++++++++++++++++++++++++++++++++++ Play Game +++++++++++++++++++++++++++++++++++++
// const handleGamePlay = () => {
//     if (playGame === true){
//         console.log(whosTurn)
//         console.log("PLAY GAME = ", playGame)
//         p1CardData = p1Deck[0]
//         cpuCardData = cpuDeck[0]
//         renderCardInfo(p1CardData, cpuCardData)
//         if (whosTurn === p1){
//             enableUserBtns()
//             handleP1Selection()
//         }else if(whosTurn === cpu){
//             showNextHandBtn();
//             disableUserBtns();
//             handleCpuSelection()
//         }
//         result(playerSelected, cpuSelected, cpuSelectedKey)
        
//     } else {
//         handleEndGame()
//     }
//     // handleResult()
//     // checkDeck()
//     // endGameButton(manually end game)
//     //
//     //

// } 

// const handleCpuSelection = () => {
//     // p1Card = p1Deck[0]
//     // cpuCard = cpuDeck[0]
//     // renderCardInfo()
//     // cpuCard = currentDeck[0];
//     keysArray = Object.keys(cpuCardData);
//     valuesArray = Object.values(cpuCardData);
//     r = random(1, 6)
//     cpuSelected = `${valuesArray[r]}`;
//     cpuSelectedKey = `${keysArray[r]}`;
//     playerSelected = `p1CardData.${cpuSelectedKey}`
//     // result(playerSelected, cpuSelected, cpuSelectedKey)
// }


// const handleP1Selection = () => {
//     // p1Card = p1Deck[0]
//     // cpuCard = cpuDeck[0]
//     // hideNextHandBtn()
//     // enableUserBtns()
//     // renderCardInfo()
//     messageBox.textContent = `Player 1's turn. Make your selection`
//     categorySelection.forEach((categoryBtn) => {
//         categoryBtn.addEventListener('click', handleSelection)
//     })
// }

// // The computer taking it's turn
// // const handleCpuTurn = () => {
//     // p1Card = p1Deck[0]
//     // cpuCard = cpuDeck[0]
//     // showNextHandBtn();
//     // disableUserBtns();
//     // renderCardInfo()
// // }




// const handleSelection = (event) => {
//     let selection = event.target.id;
//     let cpuSelection = event.target.id
//     if (selection === "p1Cat1") {
//         selection = `p1CardData.[${keys[1]}]`
//         cpuSelection = cpuCardData[`${keys[1]}`]
//         playerSelectedKey = [`${keys[1]}`]
//     } else if (selection === "p1Cat2") {
//         selection = p1CardData[`${keys[2]}`]
//         cpuSelection = cpuCardData[`${keys[2]}`]
//         playerSelectedKey = [`${keys[2]}`]
//     } else if (selection === "p1Cat3") {
//         selection = p1CardData[`${keys[3]}`]
//         cpuSelection = cpuCardData[`${keys[3]}`]
//         playerSelectedKey = [`${keys[3]}`]
//     } else if (selection === "p1Cat4") {
//         selection = p1CardData[`${keys[4]}`]
//         cpuSelection = cpuCardData[`${keys[4]}`]
//         playerSelectedKey = [`${keys[4]}`]
//     } else if (selection === "p1Cat5") {
//         selection = p1CardData[`${keys[5]}`]
//         cpuSelection = cpuCardData[`${keys[5]}`]
//         playerSelectedKey = [`${keys[5]}`]
//     // } else if (selection === "p1Cat6") {
//     //     selection = p1Card[`${keys[6]}`]
//     //     cpuSelection = cpuCard[`${keys[6]}`]
//     //     playerSelectedKey = [`${keys[6]}`]
//     }
//     playerSelectedKey 
//     console.log(playerSelectedKey)
//     playerSelected = selection
//     console.log(playerSelected)
//     cpuSelected = cpuSelection
//     console.log(cpuSelected)
//     // result(playerSelected, cpuSelected, playerSelectedKey)
//     return(playerSelected, cpuSelected, playerSelectedKey)
// }




// //After every hand, check to see if the game has ended and there is a winner
// const checkDecks = () => {
//     if (p1Deck.length < 1 || cpuDeck.length < 1) {
//         handleEndGame()
//         // playGame = false (Redundant as playGame will return false from handleEndGame)
//     } else {
//         return
//     }
// }

// // //Main section for turn taking and game play functions
// const nextTurn = () => {
//     if (whosTurn === p1) {
//         handleP1Turn();
//     } else if(whosTurn ===cpu){
//         handleCpuTurn();
//     }
// }


// //Handling a draw (both cards go into a "pot") next hand, winner takes all
// const handleDraw = () => {
//     drawContainer.push(p1Deck.shift());
//     drawContainer.push(cpuDeck.shift());
//     messageBox.innerHTML += "Both cards are added to the draw pot!<br>";
//     console.log(p1Deck.length)
//     console.log(cpuDeck.length)
//     console.log(drawContainer.length)
// };
// const winDrawCards = (wonDraw) => {
//     for (let i = 0; i < drawContainer.length; i++) {
//         wonDraw.push(drawContainer);
//     }
// }

// const convertTopTrump = (value) => {
//     if (typeof value === "string") {
//         return value === "TopTrump!" ? 1000000 : value;
//     }
//     return value;
// };

// //Evaluate the result at the end of each hand and call the relevent subfuction
// const result = () => {
//     // let var1 = convertTopTrump(playerSelected);
//     // let var2 = convertTopTrump(cpuSelected);
//     let var1 = playerSelected;
//     console.log(var1)
//     let var2 = cpuSelected;
//     console.log(var2)
//     let var3 = null
//     if(whosTurn === p1){
//         var3 = playerSelectedKey
//     }else if(whosTurn === cpu){
//         var3 = cpuSelectedKey
//     }
//     if (var1 > var2) {
//         winDrawCards(p1Deck)
//         p1Deck.push(p1Deck.shift())
//         p1Deck.push(cpuDeck.shift())
//         // convertTopTrump(var1)
//         // convertTopTrump(var2)
//         messageBox.innerHTML = `<strong>Player 1:</strong> <br>
//         ${var3} ${var1}<br>
//         <strong>Computer</strong>  <br>
//         ${var3} ${var2}<br>
//         You won this hand!`
//         whosTurn = p1
//         // sleep(3000).then(() => { nextTurn() });
//     } else if (var1 < var2) {
//         winDrawCards(cpuDeck)
//         cpuDeck.push(cpuDeck.shift())
//         cpuDeck.push(p1Deck.shift())
//         // convertTopTrump(var1)
//         // convertTopTrump(var2)
//         messageBox.innerHTML = `<strong>Player 1:</strong> <br>
//         ${var3} ${var1}<br>
//         <strong>Computer</strong>  <br>
//         ${var3}  ${var2}<br>
//         You lost this hand! <br>
//         Press for next hand <br> 
//         &#8681 &#8681 &#8681 &#8681 &#8681`
//         console.log("Press for next hand")
//         whosTurn = cpu
//         // nextTurn()
//     } else {
//         // convertTopTrump(var1)
//         // convertTopTrump(var2)
//         messageBox.innerHTML = `<strong>Player 1:</strong>  <br>
//         ${var3} ${var1}<br>
//         <strong>Computer</strong>  <br>
//         ${var3} ${var2} <br>
//         It's a draw <br>
//         Both cards have been put in a "pot"<br>winner of the next hand takes the cards in the pot<br>as well as the cards from the hand.`
//         sleep(3000).then(() => { handleDraw() });
//         // sleep(6000).then(() => { nextTurn() });
        
//     }
//     checkDecks()
// }



// //Manually End Game
// const handleEndGame = () => {
//     console.log(p1Deck.length)
//     console.log(cpuDeck.length)
//     if (p1Deck > cpuDeck) {
//         messageBox.innerHTML = `Player 1 Deck ${p1Deck.length} : CPU Deck ${cpuDeck.length} Congratulations you won!!!!.  <br> Play again? <br>Page Will Fresh in 8 seconds`
//     } else if (p1Deck < cpuDeck) {
//         messageBox.innerHTML = `Player 1 Deck ${p1Deck.length} : CPU Deck ${cpuDeck.length} Better luck next time. <br> Play again? <br>Page Will Fresh in 8 seconds`
//     } else {
//         messageBox.innerHTML = "Stalemate! It's a draw this time. Play again? <br>Page Will Fresh in 8 seconds"
//     }
//     sleep(8000).then(() => { location.reload() });
// }

// const gameEndMessage = () => {

//     messageBox.innerHTML = `You have ended the game: <br> Player 1 cards = ${p1DeckSize} 
//     <br> CPU cards = ${cpuDeckSize} The winner is...... ${winner}. <br> Play again?`
