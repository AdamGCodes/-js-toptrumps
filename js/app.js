// CARD TRUMPS MARK 2.1
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


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CACHED ELEMENT REFERENCES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Function to cache card elements dynamically
const getCardElements = (player) => {
    return{
        title: document.querySelector(`#${player}Title`),
        img: document.querySelector(`#${player}Img`),
        info: [...Array(5)].map((_,) => document.querySelector(`#${player}Info${i+1}`))
    };
};

//Cached Elements for P1 and CPU Cards
const categorySelection = document.querySelectorAll(".categoryBtn");
const cpuCategories = document.querySelectorAll(".cpu-category");

//Other cached Elements
const messageBox = document.querySelector("#message");
const howToPlayBtn = document.querySelector("#how-to-play-btn");
const howToPlayBox = document.querySelector(".how-to-play-box");
const startBtn = document.querySelector("#start-game");
const endGameBtn = document.querySelector("#end-game");
const nextHandBtn = document.querySelector("#nextHandBtn");
const closeBtn = document.querySelector('#close-btn')

//+++++++++++++++++++++++++++++++++++++ OTHER FUNCTIONS +++++++++++++++++++++++++++++++++++++
//Show/hide How To Play Info Box
const handleHowToPlay = (event) => {
    //console.log("How2 btn clicked")
    howToPlayBox.classList.toggle("show-how-to-play-box");
}
//SLEEP FUNCTION (Currently used to pause between user winning hands)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Show/Hide and Enable/Disable Game Control Buttons (Form of input validation and to help direct flow of gameplay)
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

// const changeIfString = (variable, newValue) =>
//     (typeof variable === 'string') ? newValue : variable;



//+++++++++++++++++++++++++++++++++++++ INIT +++++++++++++++++++++++++++++++++++++
// Set the categories for the deck of cards that has been chosen.
// This will change in a multiple decks mode to will be dependent on deck choice.
const renderCategories = () => {
    categorySelection.forEach((btn, index) =>{
        if (index < keys.length - 1) { // Adjusting for 'keys' alignment 
            btn.innerHTML = keys[index + 1];
        }
        
    });
    const cpuCategories = [cpuCat1, cpuCat2, cpuCat3, cpuCat4, cpuCat5];
    cpuCategories.forEach((cpuCat, index) => {
        if(index < keys.length -1){// Adjusting for 'keys' alignment
            cpuCat.innerHTML = keys[index + 1];
        }
    });
};

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

const shuffle = (currentDeck) => {
    for (let i = currentDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentDeck[i], currentDeck[j]] = [currentDeck[j], currentDeck[i]]
    }
    return currentDeck;
}

const deal = () => {

    p1Deck = shuffledDeck.filter((element, index) => index % 2 === 0);
    cpuDeck = shuffledDeck.filter((element, index) => index % 2 != 0);
}

const renderCardInfo = () => {
    p1CardData = p1Deck[0]
    cpuCardData = cpuDeck[0]
    // Render P1 Cards
    p1Title.innerHTML = p1CardData.Name;
    p1Img.innerHTML = `<img src="${p1CardData.Image}">`;
    p1Info1.innerHTML = p1CardData.Speed;
    p1Info2.innerHTML = p1CardData.Firepower;
    p1Info3.innerHTML = p1CardData.Defense;
    p1Info4.innerHTML = p1CardData.Crew;
    p1Info5.innerHTML = p1CardData.CargoCapacity;
    console.log(p1CardData)
    
    // Render CPU Cards
    cpuTitle.innerHTML = `${cpuCardData.Name}`;
    cpuImg.innerHTML= `<img src="${cpuCardData.Image}">`;
    cpuInfo1.innerHTML = `${cpuCardData.Speed}`;
    cpuInfo2.innerHTML = `${cpuCardData.Firepower}`;
    cpuInfo3.innerHTML = `${cpuCardData.Defense}`;
    cpuInfo4.innerHTML = `${cpuCardData.Crew}`;
    cpuInfo5.innerHTML = `${cpuCardData.CargoCapacity}`;
    console.log(cpuCardData)
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
    // } else if (selection === "p1Cat6") {
    //     selection = p1Card[`${keys[6]}`]
    //     cpuSelection = cpuCard[`${keys[6]}`]
    //     playerSelectedKey = [`${keys[6]}`]
    }
    playerSelectedKey 
    playerSelected = selection
    cpuSelected = cpuSelection
    result(playerSelected, cpuSelected, playerSelectedKey)    
}

// The computer taking it's turn
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

//After every hand, check to see if the game has ended and there is a winner
const checkDecks = () => {
    if (p1Deck.length < 1 || cpuDeck.length < 1) {
        handleEndGame()
        keepPlaying = false
    } else {
        return
    }
}

//Main section for turn taking and game play functions
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

//Handling a draw (both cards go into a "pot") next hand, winner takes all
const handleDraw = () => {
    drawContainer.push(p1Deck.shift());
    drawContainer.push(cpuDeck.shift());
    messageBox.innerHTML += "Both cards are added to the draw pot!<br>";
    console.log(p1Deck.length)
    console.log(cpuDeck.length)
    console.log(drawContainer.length)
};
const winDrawCards = (wonDraw) => {
    for (let i = 0; i < drawContainer.length; i++) {
        wonDraw.push(drawContainer);
    }
}

const convertTopTrump = (value) => {
    if (typeof value === "string") {
        return value === "TopTrump!" ? 1000000 : value;
    }
    return value;
};

//Evaluate the result at the end of each hand and call the relevent subfuction
const result = () => {
    // let var1 = convertTopTrump(playerSelected);
    // let var2 = convertTopTrump(cpuSelected);
    let var1 = playerSelected;
    console.log(var1)
    let var2 = cpuSelected;
    console.log(var2)
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
        // convertTopTrump(var1)
        // convertTopTrump(var2)
        messageBox.innerHTML = `<strong>Player 1:</strong> <br>
        ${var3} [${var1}]<br>
        <strong>Computer</strong>  <br>
        ${var3} [${var2}]<br>
        You won this hand!`
        isPlayerTurn = true
        sleep(3000).then(() => { nextTurn() });
    } else if (var1 < var2) {
        winDrawCards(cpuDeck)
        cpuDeck.push(cpuDeck.shift())
        cpuDeck.push(p1Deck.shift())
        // convertTopTrump(var1)
        // convertTopTrump(var2)
        messageBox.innerHTML = `<strong>Player 1:</strong> <br>
        ${var3} [${var1}]<br>
        <strong>Computer</strong>  <br>
        ${var3}  [${var2}]<br>
        You lost this hand! <br>
        Press for next hand <br> 
        &#8681 &#8681 &#8681 &#8681 &#8681`
        console.log("Press for next hand")
        isPlayerTurn = false
        nextTurn()
    } else {
        // convertTopTrump(var1)
        // convertTopTrump(var2)
        messageBox.innerHTML = `<strong>Player 1:</strong>  <br>
        ${var3} [${var1}]<br>
        <strong>Computer</strong>  <br>
        ${var3} [${var2}] <br>
        It's a draw <br>
        Both cards have been put in a "pot"<br>winner of the next hand takes the cards in the pot<br>as well as the cards from the hand.`
        sleep(3000).then(() => { handleDraw() });
        sleep(6000).then(() => { nextTurn() });
        
    }
    checkDecks()
}

const handleStartGame = () => {
    keepPlaying = true
    isPlayerTurn = true
    shuffledDeck = shuffle(currentDeck);
    deal()      
        nextTurn()
    }

//Manually End Game
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

const gameEndMessage = () => {

    messageBox.innerHTML = `You have ended the game: <br> Player 1 cards = ${p1DeckSize} 
    <br> CPU cards = ${cpuDeckSize} The winner is...... ${winner}. <br> Play again?`
}

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Start Game
startBtn.addEventListener('click', handleStartGame)
//End Game
endGameBtn.addEventListener('click', handleEndGame )
//View How To Play Info
howToPlayBtn.addEventListener('click', handleHowToPlay)
//Close How To Play Info
closeBtn.addEventListener('click', handleHowToPlay)