
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CONSTANTS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let keys;
let shuffledDeck;
let p1Deck;
let cpuDeck;
let p1Card;
let cpuCard;
let playerSelected;
let playerSelectedKey;
let cpuSelected;
let cpuSelectedKey;
let isPlayerTurn;
let drawContainer = [];
let keepPlaying;


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CACHED ELEMENT REFERENCES- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cached Elements for P1 Card
const p1CardTitle = document.querySelector("#p1Title");
const p1CardImg = document.querySelector("#p1Img");
const categorySelection = document.querySelectorAll(".categoryBtn");

const p1Info1 = document.querySelector("#p1Info1");
const p1Info2 = document.querySelector("#p1Info2");
const p1Info3 = document.querySelector("#p1Info3");
const p1Info4 = document.querySelector("#p1Info4");
const p1Info5 = document.querySelector("#p1Info5");
const p1Info6 = document.querySelector("#p1Info6");

//Cached Elements for CPU Card
const cpuCardTitle = document.querySelector("#cpuTitle");
const cpuCardImg = document.querySelector("#cpuImg");
const cpuCategories = document.querySelectorAll('#cpuCategory');

const cpuInfo1 = document.querySelector("#cpuInfo1");
const cpuInfo2 = document.querySelector("#cpuInfo2");
const cpuInfo3 = document.querySelector("#cpuInfo3");
const cpuInfo4 = document.querySelector("#cpuInfo4");
const cpuInfo5 = document.querySelector("#cpuInfo5");
const cpuInfo6 = document.querySelector("#cpuInfo6");

//Other cached Elements
const messageBox = document.querySelector("#message");
const howToPlayBtn = document.querySelector("#how-to-play-btn");
const howToPlayBox = document.querySelector(".how-to-play-box");
const startBtn = document.querySelector("#start-game");
const endGameBtn = document.querySelector("#end-game");
const nextHandBtn = document.querySelector("#nextHandBtn");

//+++++++++++++++++++++++++++++++++++++ OTHER FUNCTIONS +++++++++++++++++++++++++++++++++++++
//Show/hide How To Play Info Box
const handleHowToPlay = (event) => {
    //console.log("How2 btn clicked")
    howToPlayBox.classList.toggle("show-how-to-play-box");
}
// ///SLEEP FUNCTION
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//sleep(4000).then(() => { console.log('World!'); });


// Show/Hide and Enable/Disable Game Control Buttons
const hideNextHandBtn = () => {
    document.getElementById("nextHandBtn").style.display = "none"
}
const showNextHandBtn = () => {
    document.getElementById("nextHandBtn").style.display = "block"
}
const disableUserBtns = () => {
    categorySelection.forEach((categoryBtn) => {
        categoryBtn.disabled = true;
    })
}
const enableUserBtns = () => {
    categorySelection.forEach((categoryBtn) => {
        categoryBtn.disabled = false;
    })
}

const manageStrings = (varX) => {
    const isString = (varX) => {
        return typeof varX === "string"
    }
    if (isString(varX) === true) {
        return varX = 1000000000
}}

//+++++++++++++++++++++++++++++++++++++ INIT +++++++++++++++++++++++++++++++++++++
// Set the categories for the deck of cards that has been chosen.
// This will change in a multiple decks mode to will be dependent on deck choice.
const renderCategories = () => {
    p1Cat1.innerHTML = `${keys[1]}`
    p1Cat2.innerHTML = `${keys[2]}`
    p1Cat3.innerHTML = `${keys[3]}`
    p1Cat4.innerHTML = `${keys[4]}`
    p1Cat5.innerHTML = `${keys[5]}`
    p1Cat6.innerHTML = `${keys[6]}`

    cpuCat1.innerHTML = `${keys[1]}`
    cpuCat2.innerHTML = `${keys[2]}`
    cpuCat3.innerHTML = `${keys[3]}`
    cpuCat4.innerHTML = `${keys[4]}`
    cpuCat5.innerHTML = `${keys[5]}`
    cpuCat6.innerHTML = `${keys[6]}`
}

//Get Category Names for This Deck
const getCategories = () => {
    keys = Object.keys(currentDeck[0]);
    // console.log(keys)
}

const init = () => {
    getCategories()
    renderCategories()
    hideNextHandBtn()
}
init()


//+++++++++++++++++++++++++++++++++++++ Start Game +++++++++++++++++++++++++++++++++++++
//Shuffle the deck
const shuffle = (currentDeck) => {
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]]
    }
    return currentDeck;
}

//Deal the shuffled cards into two decks
const deal = () => {

    p1Deck = shuffledDeck.filter((element, index) => index % 2 === 0);
    cpuDeck = shuffledDeck.filter((element, index) => index % 2 != 0);
}

const renderCardInfo = () => {
    p1Card = p1Deck[0]
    // console.log(p1Card)
    cpuCard = cpuDeck[0]
    // console.log(cpuCard) 
    p1CardTitle.textContent = `${p1Card.Name}`
    p1CardImg.innerHTML = `<img src="${p1Card.Image}">`
    p1Info1.innerHTML = `${p1Card.Speed}`
    p1Info2.innerHTML = `${p1Card.Firepower}`
    p1Info3.innerHTML = `${p1Card.Defense}`
    p1Info4.innerHTML = `${p1Card.Crew}`
    p1Info5.innerHTML = `${p1Card.CargoCapacity}`
    p1Info6.innerHTML = `${p1Card.SpecialAbility}`
    cpuCardTitle.textContent = `${cpuCard.Name}`
    cpuCardImg.innerHTML = `<img src="${cpuCard.Image}">`
    cpuInfo1.innerHTML = `${cpuCard.Speed}`
    cpuInfo2.innerHTML = `${cpuCard.Firepower}`
    cpuInfo3.innerHTML = `${cpuCard.Defense}`
    cpuInfo4.innerHTML = `${cpuCard.Crew}`
    cpuInfo5.innerHTML = `${cpuCard.CargoCapacity}`
    cpuInfo6.innerHTML = `${cpuCard.SpecialAbility}`
}


const handleSelection = (event) => {
    let selection = event.target.id;
    let cpuSelection = event.target.id
    if (selection === "p1Cat1") {
        selection = p1Card[`${keys[1]}`]
        cpuSelection = cpuCard[`${keys[1]}`]
        playerSelectedKey = [`${keys[1]}`]
    } else if (selection === "p1Cat2") {
        selection = p1Card[`${keys[2]}`]
        cpuSelection = cpuCard[`${keys[2]}`]
        playerSelectedKey = [`${keys[2]}`]
    } else if (selection === "p1Cat3") {
        selection = p1Card[`${keys[3]}`]
        cpuSelection = cpuCard[`${keys[3]}`]
        playerSelectedKey = [`${keys[3]}`]
    } else if (selection === "p1Cat4") {
        selection = p1Card[`${keys[4]}`]
        cpuSelection = cpuCard[`${keys[4]}`]
        playerSelectedKey = [`${keys[4]}`]
    } else if (selection === "p1Cat5") {
        selection = p1Card[`${keys[5]}`]
        cpuSelection = cpuCard[`${keys[5]}`]
        playerSelectedKey = [`${keys[5]}`]
    } else if (selection === "p1Cat6") {
        selection = p1Card[`${keys[6]}`]
        cpuSelection = cpuCard[`${keys[6]}`]
        playerSelectedKey = [`${keys[6]}`]
    }
    playerSelectedKey 
    playerSelected = selection
    cpuSelected = cpuSelection
    // playerSelected.manageStrings()
    // cpuSelected.manageStrings()
    result(playerSelected, cpuSelected, playerSelectedKey)    
}

const handleCpuNextHand = () => {
    p1Card = p1Deck[0]
    cpuCard = cpuDeck[0]
    renderCardInfo()
    const random = (min, max) => {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(6);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    }
    cpuCard = currentDeck[0];
    keysArray = Object.keys(cpuCard);
    valuesArray = Object.values(cpuCard);
    r = random()
    cpuSelected = `${valuesArray[r]}`;
    cpuSelectedKey = `${keysArray[r]}`
    playerSelected = `p1Card.${cpuSelectedKey}`
    result(playerSelected, cpuSelected, cpuSelectedKey)
}

const checkDecks = () => {
    if (p1Deck.length < 1 || cpuDeck.length < 1) {
        handleEndGame()
        keepPlaying = false
    } else {
        return
    }
}

const result = () => {
    let var1 = playerSelected
    //manageStrings(var1)
    let var2 = cpuSelected
    //manageStrings(var2)
    let var3 = null
    
    if(isPlayerTurn === true){
        var3 = playerSelectedKey
    }else{
        var3 = cpuSelectedKey
    }
    if (var1 > var2) {
        winDrawCards(p1Deck)
        p1Deck.push(p1Deck.shift())
        p1Deck.push(cpuDeck.shift())
        messageBox.innerHTML = `Player 1: ${var3} [${var1}] vs  Computer: ${var3} [${var2}]<br>
        You won this hand!`
        isPlayerTurn = true
        console.log(p1Deck)
        console.log(cpuDeck)
        sleep(3000).then(() => { nextTurn() });
    }
    else if (var1 < var2) {
        winDrawCards(cpuDeck)
        cpuDeck.push(cpuDeck.shift())
        cpuDeck.push(p1Deck.shift())
        messageBox.innerHTML = `Player 1: ${var3} [${var1}] vs Computer: ${var3}  [${var2}]<br>
        You lost this hand!`
        isPlayerTurn = false
        console.log("about to run next turn")
        console.log(p1Deck)
        console.log(cpuDeck)
        nextTurn()
    } else {
        messageBox.innerHTML = `Player1: ${var3} [${var1}] vs Computer ${var3} [${var2}] <br>
        It's a draw <br>
        Both cards have been put in a "pot" winner of the next hand takes the cards in the pot as well as the cards from the hand.`
        draw()
        console.log(drawContainer)
        nextTurn()
    }
    checkDecks()

}
const draw = () => {
    drawContainer.push(p1Deck.shift())
    drawContainer.push(cpuDeck.shift())
    //Think I can do without isPlayer Turn as it just just stay the same as whateve it was
}
const winDrawCards = (wonDraw) => {
    for( let i = 0; i < drawContainer.length; i++) {
    wonDraw.push(drawContainer);
    } 
}

const nextTurn = () => {
    if (isPlayerTurn === true) {
        playerTurn();
    } else {
        computerTurn();
    }
}

const playerTurn = () => {
    p1Card = p1Deck[0]
    cpuCard = cpuDeck[0]
    hideNextHandBtn()
    enableUserBtns()
    renderCardInfo()
    messageBox.textContent = `Player 1's turn. Make your selection`
    categorySelection.forEach((categoryBtn) => {
        categoryBtn.addEventListener('click', handleSelection)
    })

}

const computerTurn = () => {
    p1Card = p1Deck[0]
    cpuCard = cpuDeck[0]
    showNextHandBtn();
    disableUserBtns()
    renderCardInfo()
    nextHandBtn.addEventListener('click', handleCpuNextHand)

}




const handleStartGame = () => {
    keepPlaying = true
    isPlayerTurn = true
    // console.log(`keepPlaying ${keepPlaying}`)
    // console.log("Here we go.")
    shuffledDeck = shuffle(currentDeck);
    // console.log("Deck shuffled")
    deal()
    // console.log("Cards Dealt")
    // console.log(`isPlayerTurn ${isPlayerTurn}`)
    // p1Deck.length
    // cpuDeck.length
    // console.log(p1Deck.length)
    // console.log(cpuDeck.length)       
    console.log("Press for next hand>>>>")
        nextTurn()
    }
    //checkDecks()



//+++++++++++++++++++++++++++++++++++++ Manual End Game +++++++++++++++++++++++++++++++++++++

const gameEndMessage = () => {

    messageBox.innerHTML = `You have ended the game: <br> Player 1 cards = ${p1DeckSize} 
    <br> CPU cards = ${cpuDeckSize} The winner is...... ${winner}. <br> Play again?`
}
const handleEndGame = () => {
    console.log(p1Deck.length)
    console.log(cpuDeck.length)
    if (p1Deck > cpuDeck) {
        messageBox.innerHTML = `Player 1 Deck ${p1Deck.length} : CPU Deck ${cpuDeck.length} Congratulations you won!!!!.  <br> Play again? <br>Page Will Fresh in 8 seconds`
    } else if (p1Deck < cpuDeck) {
        messageBox.innerHTML = `Player 1 Deck ${p1Deck.length} : CPU Deck ${cpuDeck.length} Better luck next time. <br> Play again? <br>Page Will Fresh in 8 seconds`
    } else {
        messageBox.innerHTML = "Stalemate! It's a draw this time. Play again? <br>Page Will Fresh in 8 seconds"
    }
    sleep(8000).then(() => { location.reload() });
}


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Start Game
startBtn.addEventListener('click', handleStartGame)
//End Game
endGameBtn.addEventListener('click', handleEndGame )
//View How To Play Info
howToPlayBtn.addEventListener('click', handleHowToPlay)







//XXXXXXXX  CODE GRAVEYARD   XXXXXXXX  CODE GRAVEYARD   XXXXXXXX  CODE GRAVEYARD   XXXXXXXX



// OLD INDIVIDUAL CACHED ITEMS
// const p1Category1 = document.querySelector("#p1Cat1")
// const p1Category2 = document.querySelector("#p1Cat2")
// const p1Category3 = document.querySelector("#p1Cat3")
// const p1Category4 = document.querySelector("#p1Cat4")
// const p1Category5 = document.querySelector("#p1Cat5")
// const p1Category6 = document.querySelector("#p1Cat6")

// const cpuCategory1 = document.querySelector("#cpuCat1")
// const cpuCategory2 = document.querySelector("#cpuCat2")
// const cpuCategory3 = document.querySelector("#cpuCat3")
// const cpuCategory4 = document.querySelector("#cpuCat4")
// const cpuCategory5 = document.querySelector("#cpuCat5")
// const cpuCategory6 = document.querySelector("#cpuCat6")


// OLD INDIVIDUAL EVENT LISTENERS
// p1Category1.addEventListener('click', handleSelection)
// p1Category2.addEventListener('click', handleSelection)
// p1Category3.addEventListener('click', handleSelection)
// p1Category4.addEventListener('click', handleSelection)
// p1Category5.addEventListener('click', handleSelection)
// p1Category5.addEventListener('click', handleSelection)
// p1Category6.addEventListener('click', handleSelection)





// const p1HandWin = () => {
//     p1Deck.push(p1Deck.shift())
//     p1Deck.push(cpuDeck.shift())
//     messageBox.textContent = "Player 1 Wins This Hand";
//     console.log(p1Deck);
//     console.log(cpuDeck);
//     checkDecks()
//     isPlayerTurn = true

//     //!!!!!!! Think I could make this dryer by having one win function for either p1 or cpu
// }


// const cpuHandWin = () => {
//     cpuDeck.push(cpuDeck.shift())
//     cpuDeck.push(p1Deck.shift())
//     messageBox.textContent = "Computer Wins This Hand";
//     console.log(p1Deck);
//     console.log(cpuDeck);
//     checkDecks()
//     //!!!!!!! Think I could make this dryer by having one win function for either p1 or cpu
// }


// const compareHand = () => {
//     if (playerSelected > cpuSelected) {
//         p1HandWin()
//         console.log("P1 Win")
//         isPlayerTurn = true
//     } else if (playerSelected < cpuSelected) {
//         cpuHandWin()
//         console.log("cpu Win")
//         messageBox.textContent = `The computer selected ${cpuSelectedKey}/n 
//         Computer ${cpuSelectedKey} : ${cpuSelected} Player one's ${cpuSelectedKey} : ${p1Card.cpuSelectedKey}`
//         isPlayerTurn = false
//     } else {
//         console.log("It's a draw!")
//         return //draw ()
//     }
// }
