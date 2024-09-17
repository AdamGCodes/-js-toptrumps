
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CONSTANTS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let p1Turn;
let winner;
let p1Deck;
let cpuDeck;
let p1Card;
let cpuCard;
let playerSelected;
let cpuSelected;
let keys;
let p1DeckSize;
let cpuDeckSize;
let drawContainer;
let playOn

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CACHED ELEMENT REFERENCES- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cached Elements for P1 Card
const p1CardTitle = document.querySelector("#p1Title")
const p1CardImg = document.querySelector("#p1Img")
const categorySelection = document.querySelectorAll(".categoryBtn")

const p1Info1 = document.querySelector("#p1Info1")
const p1Info2 = document.querySelector("#p1Info2")
const p1Info3 = document.querySelector("#p1Info3")
const p1Info4 = document.querySelector("#p1Info4")
const p1Info5 = document.querySelector("#p1Info5")
const p1Info6 = document.querySelector("#p1Info6")

//Cached Elements for CPU Card
const cpuCardTitle = document.querySelector("#cpuTitle")
const cpuCardImg = document.querySelector("#cpuImg")
const cpuCategories = document.querySelectorAll('#cpuCategory')

const cpuInfo1 = document.querySelector("#cpuInfo1")
const cpuInfo2 = document.querySelector("#cpuInfo2")
const cpuInfo3 = document.querySelector("#cpuInfo3")
const cpuInfo4 = document.querySelector("#cpuInfo4")
const cpuInfo5 = document.querySelector("#cpuInfo5")
const cpuInfo6 = document.querySelector("#cpuInfo6")

//Other cached Elements
const messageBox = document.querySelector("#message")
const howToPlayBtn = document.querySelector("#how-to-play-btn")
const howToPlayBox = document.querySelector(".how-to-play-box")
const startBtn = document.querySelector("#start-game")
const endGameBtn = document.querySelector('#end-game')


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -FUNCTIONS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Show/hide How To Play Info Box
const handleHowToPlay = (event) => {
    //console.log("How2 btn clicked")
    howToPlayBox.classList.toggle("show-how-to-play-box");
}

//+++++++++++++++++++++++++++++++++++++Functions for Init+++++++++++++++++++++++++++++++++++++
//Get Category Names for This Deck
const getCategories = () => {
    keys = Object.keys(currentDeck[0]);
    // console.log(keys)
}

// For init() Set the categories for the deck of cards that has been chosen.
// Better to just do that once on init than having to re-render along with the info each time
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

const init = () => {
    p1Card = null
    cpuCard = null
    keys = null
    getCategories()
    
}
init()


//+++++++++++++++++++++++++++++++++++++Functions for Play Game+++++++++++++++++++++++++++++++++++++
//Shuffle the deck
const shuffle = (currentDeck) => {
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]]
    }
    return currentDeck;
}

const shuffledDeck = shuffle(currentDeck);

//Deal the shuffled cards into two decks
const deal = () => {

    p1Deck = shuffledDeck.filter((element, index) => index % 2 === 0);
    cpuDeck = shuffledDeck.filter((element, index) => index % 2 != 0);
}

//console.log(shuffledDeck)
// console.log(p1Deck)
// console.log(cpuDeck)

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


const playGame = () => {
    playOn = true
    renderCategories()
    shuffle(currentDeck)
    deal()
    p1DeckSize = p1Deck.length
    console.log(p1DeckSize)
    cpuDeckSize = cpuDeck.length
    console.log(cpuDeckSize)
    renderCardInfo()
    // while(playOn === true){

    // }
    //handleSelection(event, p1Card, playerSelected)
    //compareHand()

}
//playGame()


//+++++++++++++++++++++++++++++++++++++Functions for Handle Selection +++++++++++++++++++++++++++++++++++++


// const cpuWin = () => {
//     turn = cpu
//     let moveP1Card = playerDeck[0]
//     let moveCpuCard = cpuDeck[0]
//     let cl = cpuDeckSize
//     cpuDeck.splice(cl, 0, moveCpuCard, moveP1Card)
//     p1Deck.splice(0, 1)
//     console.log("CPU Wins")
//     console.log(cpuDeckSize)
// }

/////////////////////////////////////////////////////////////////////////
/////////////////////////WOrking on this area of comparing hands


// const manageStrings = () => {
//     const isString = (var1) => {
//         return typeof var1 === "string"
//     }
//     if(isString(playerSelected) === true){
//         console.log("yeah it's true")
//     } else {
//         console.log("nope it isn't")
//     }

// }

const checkForWinner = () =>{
    if(p1Deck.length < 1){
        winner = cpu
        messageBox.textContent = "You battled valiantly but on this occasion the computer has bested you. Would you like to play again?"
        playOn = false
    }else if(cpuDeck.length < 1){
        winner = player1
        messageBox.textContent = "You beat the computer. They shall write songs of this victory!!! Would you like to play again?"
        playOn = flase
    }else{
        return
    }
}
const p1Win = () => {
    p1Deck.push(p1Deck.shift())
    p1Deck.push(cpuDeck.shift())
    messageBox.textContent = "Player 1 Wins This Hand";
    console.log(p1Deck);
    console.log(cpuDeck);
    checkForWinner()
    p1Turn = true
}
const cpuWin = () => {
    cpuDeck.push(cpuDeck.shift())
    cpuDeck.push(p1Deck.shift())
    messageBox.textContent = "Computer Wins This Hand";
    console.log(p1Deck);
    console.log(cpuDeck);
    checkForWinner()
    p1Turn = true
}

const compareHand = () => {
    if (playerSelected > cpuSelected) {
        p1Win()
        // console.log("P1 Win")
    } else if (playerSelected < cpuSelected){
        //cpuWin()
        console.log("cpu Win")
    } else {
        //return //draw ()
        console.log("It's a draw")
    }
}
//Handling the selection of the category for this hand
//!!!!! I think this is working but need to check that the returned playerSelected is global scope to use eslewhere

const getSelection = () => {
    let selection = event.target.id;
    let cpuSelection = event.target.id
    if (selection === "p1Cat1") {
        selection = p1Card[`${keys[1]}`]
        cpuSelection = cpuCard[`${keys[1]}`]
    } else if (selection === "p1Cat2") {
        selection = p1Card[`${keys[2]}`]
        cpuSelection = cpuCard[`${keys[2]}`]
    } else if (selection === "p1Cat3") {
        selection = p1Card[`${keys[3]}`]
        cpuSelection = cpuCard[`${keys[3]}`]
    } else if (selection === "p1Cat4") {
        selection = p1Card[`${keys[4]}`]
        cpuSelection = cpuCard[`${keys[4]}`]
    } else if (selection === "p1Cat5") {
        selection = p1Card[`${keys[5]}`]
        cpuSelection = cpuCard[`${keys[5]}`]
    } else if (selection === "p1Cat6") {
        selection = p1Card[`${keys[6]}`]
        cpuSelection = cpuCard[`${keys[6]}`]
    }
    playerSelected = selection
    cpuSelected = cpuSelection
    
    console.log(playerSelected)
    console.log(cpuSelected)

}

const handleSelection = (event) => {
    
    getSelection()
    
    // console.log(isString(playerSelected));
    //manageStrings(playerSelected)
    compareHand()
    // winner( declare winner, card to back plus oppenants card to the back IF either deck === empty playOn = false next turn goes to the winner)
    // draw()
    // Game over (watch for empty deck, display deck sizes and declare winner)
    // Must need to have some loop to keep the game going until it ends




    //p1Card = p1Deck[0]    
    
    
}





// const test = () =>{
    
// }
// if (playerSelected > cpuCard[`${keys[1]}`]) {
//     console.log("Player 1 Wins")
// }

// const gameEndMessage = (//can I parse in the winner?) =>{ //Get this as a function as it could be displayed in a number of different places
//     messageBox.textContent = `You have ended the game there are ${p1DeckSize} cards in your deck and ${cpuDeckSize} cards in the computers deck.`
// }
// const endGame = () => {
//     playOn = false
   
//     if (p1DeckSize > cpuDeckSize){

//     }
// }


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Start Game
startBtn.addEventListener('click', playGame)
//End Game
//endGameBtn.addEventListener('click', endGame )
//View How To Play Info
howToPlayBtn.addEventListener('click', handleHowToPlay)
//Getting User Selections
categorySelection.forEach((categoryBtn) => {
    categoryBtn.addEventListener('click', handleSelection)
})




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