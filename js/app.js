// CARD TRUMPS MAKR 2.1

// //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const p1 = "p1"
const cpu = "cpu"
let players = [cpu, p1]
let p1CardData;
let cpuCardData;
let message = ""
let drawContainer = []
// let currentDeck = fierceAnimals
// const cpuKeys = [cpuCat1, cpuCat2, cpuCat3, cpuCat4, cpuCat5];
// const p1Keys = [p1Cat1, p1Cat2, p1Cat3, p1Cat4, p1Cat5];

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
const startBtn = document.querySelector("#start-game");
const howToPlayBtn = document.querySelector("#how-to-play-btn");
const closeBtn = document.querySelector('#close-btn')
const endGameBtn = document.querySelector("#end-game");

// Other Cached Elements
// Button to open and close game into and instructions modal
const howToPlayBox = document.querySelector(".how-to-play-box");

// Message area for displaying game status messages
const messageBox = document.querySelector("#message");

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Global Functions >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Show/hide How To Play Info Box
const handleHowToPlay = (event) => {
    console.log("How2 btn clicked")
    howToPlayBox.classList.toggle("show-how-to-play-box");
}

//SLEEP FUNCTION
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Dsiplay Game Status Messages
const handleMessages = () => {
    messageBox.innerHTML = message
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

const revealCpuCard = () => {
    document.querySelector('.computer-card').classList.remove('flip')
    // console.log("cpu card shown")
}
const hideCpuCard = () => {
    document.querySelector('.computer-card').classList.add('flip')
    // console.log("cpu card hidden")
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
    revealCpuCard()
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
    hideCpuCard();
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

    // Render CPU Cards
    cpuTitle.innerHTML = `${cpuCardData.Name}`;
    cpuImg.innerHTML = `<img src="${cpuCardData.Image}">`;
    cpuInfo1.innerHTML = `${cpuCardData.Speed}`;
    cpuInfo2.innerHTML = `${cpuCardData.Firepower}`;
    cpuInfo3.innerHTML = `${cpuCardData.Defense}`;
    cpuInfo4.innerHTML = `${cpuCardData.Crew}`;
    cpuInfo5.innerHTML = `${cpuCardData.CargoCapacity}`;
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

// Require a user input after result before moving on to the next hand
async function handleNextHand() {
    return new Promise((resolve)=>{
        const nextHandBtn = document.querySelector("#nextHandBtn");

        function onClick() {
            nextHandBtn.removeEventListener("click", onClick);
            resolve();
        }
        nextHandBtn.addEventListener("click", onClick);
        nextHandBtn.style.display = "block";
        message = ""
    })
}

//Random Function
const random = (min, max) => {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(6);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
}

//Handling a draw (both cards go into a "pot") next hand, winner takes all
//Previously had a handleDraw function but it fit better and looked nicer keeping it in the main result function.
const winDrawCards = (wonDraw) => {
    for (let i = 0; i < drawContainer.length; i++) {
        wonDraw.push(drawContainer);
    }
    drawContainer.length = 0
}

//Handling string values. Strings such as FTL will always be the highest possible value for that category.
const handleString = (value) =>{
    if (typeof value === 'string' ) return Infinity;
    return value;
}

//Evaluate the result at the end of each hand and call the relevent subfuction
const result = () => {
    if (handleString(playerSelected) > handleString(cpuSelected)) {
        winDrawCards(p1Deck) //All cards from draw container (from previous drawn hands) are added to the winners deck
        p1Deck.push(p1Deck.shift())
        p1Deck.push(cpuDeck.shift())
        message = 
            `<strong>Player 1:</strong> <br>
            ${SelectedKey} ${playerSelected}<br><br>
            <strong>Computer:</strong>  <br>
            ${SelectedKey} ${cpuSelected}<br>
            You won this hand! <br><br>
            Ready to play the next hand? Click Below`
        whosTurn = p1
        console.log("P1 was the winner")
    } else if (handleString(playerSelected) < handleString(cpuSelected)) {
        winDrawCards(cpuDeck)
        cpuDeck.push(cpuDeck.shift())
        cpuDeck.push(p1Deck.shift())
        message = 
            `<strong>Player 1:</strong> <br>
            ${SelectedKey} ${playerSelected}<br><br>
            <strong>Computer:</strong>  <br>
            ${SelectedKey}  ${cpuSelected}<br>
            You lost this hand!  <br><br>
            Ready to play the next hand? Click Below`
        whosTurn = cpu
        console.log("CPU was the winner.")
    } else {
        drawContainer.push(p1Deck.shift());
        drawContainer.push(cpuDeck.shift());
        message = 
            `<strong>Player 1:</strong>  <br>
            ${SelectedKey} ${playerSelected}<br><br>
            <strong>Computer</strong>  <br>
            ${SelectedKey} ${playerSelected} <br>
            It's a draw <br>
            Both cards added to "pot"<br>
            Next hand winner takes all. <br><br>
            Ready to play the next hand? Click Below`
        console.log(p1Deck.length)
        console.log(cpuDeck.length)
        console.log(drawContainer.length)
    }
}
//After every hand, check to see if the game has ended and there is a winner
const checkDecks = () => {
    console.log(p1Deck.length, cpuDeck.length)
    if (p1Deck.length < 1 || cpuDeck.length < 1) {
        playGame = false
        handleEndGame()
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
        handleMessages(message)
        hideCpuCard()
        renderCardInfo()
        if(whosTurn === p1){
            message = "Player 1s turn, make your selection."
            handleMessages(message)
            enableUserBtns()
            const selection = await handleP1Input(); // Refactored wait for player input on player turn
            console.log("In result slot", selection, SelectedKey, playerSelected, cpuSelected)
            result(selection) //Now we can process the turn after selection.
            checkDecks()
            handleMessages(message)
            revealCpuCard()
            showNextHandBtn()
            await handleNextHand()
        } else if(whosTurn === cpu) {
            disableUserBtns()
            const selection = await handleCpuSelection()
            console.log("In result slot", selection, SelectedKey, playerSelected, cpuSelected)
            result(selection)
            checkDecks()
            handleMessages(message)
            revealCpuCard()
            showNextHandBtn()
            await handleNextHand()

        } else {
            console.log("We have experienced an error the game will be terminated sorry about that.")
            break;
        }
        continue
    }
}

// +++++++++++++++++++++++++++++++++++++ END GAME +++++++++++++++++++++++++++++++++++++
//Manually End Game
const handleEndGame = () => {
    console.log(p1Deck.length)
    console.log(cpuDeck.length)
    if (p1Deck > cpuDeck) {
        message = 
            `<strong>Player 1:</strong><br>
            ${p1Deck.length} cards <br>
            <strong>CPU</strong>:<br> 
            ${cpuDeck.length} cards<br>
            Congratulations you won!!!!.  <br> 
            Play again? <br>
            Page Will Fresh in 10 seconds`
    } else if (p1Deck < cpuDeck) {
        message = `Player 1 Deck ${p1Deck.length} : CPU Deck ${cpuDeck.length} Better luck next time. <br> Play again? <br>Page Will Fresh in 10 seconds`
    } else {
        message = "Stalemate! It's a draw this time. Play again? <br>Page Will Fresh in 10 seconds"
    }
    handleMessages(message)
    sleep(10000).then(() => { handleStartGame() });
}



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Start Game
startBtn.addEventListener('click', handleStartGame)

//Next Hand Button
nextHandBtn.addEventListener('click', handleNextHand)

//End Game
endGameBtn.addEventListener('click', handleEndGame)

//View How To Play Info
howToPlayBtn.addEventListener('click', handleHowToPlay)

//Close How To Play Info
closeBtn.addEventListener('click', handleHowToPlay)