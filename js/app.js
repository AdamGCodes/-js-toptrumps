
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CONSTANTS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const currentDeck = [
    {
        Name: "Millennium Falcon",
        Speed: 654,  
        Firepower: 85,
        Defense: 75,
        Crew: 4,
        CargoCapacity: 100,  
        SpecialAbility: "Smuggling",
        Image: "Assets/Images/sci-fi-ships-toptrumps/millennium-falcon.jpg"
    },
    {
        Name: "USS Enterprise (NCC-1701-D)",
        Speed: 577,  
        Firepower: 90,
        Defense: 85,
        Crew: 1012,
        CargoCapacity: 700 ,  
        SpecialAbility: "Warp Speed",
        Image: "Assets/Images/sci-fi-ships-toptrumps/USS-Enterprise-next-generation.avif"
    },
    {
        Name: "Serenity",
        Speed: 500,  
        Firepower: 65,
        Defense: 50,
        Crew: 9,
        CargoCapacity: 200,  
        SpecialAbility: "Outmaneuver",
        Image: "Assets/Images/sci-fi-ships-toptrumps/sereniti.webp"
    },
    {
        Name: "Battlestar Galactica",
        Speed: 462,  
        Firepower: 95,
        Defense: 90,
        Crew: 2600,
        CargoCapacity: 4000,  
        SpecialAbility: "Heavy Armor",
        Image: "Assets/Images/sci-fi-ships-toptrumps/battlestar_galactica.jpg"
    },
    {
        Name: "Heart of Gold",
        Speed: 1000,  
        Firepower: 60,
        Defense: 50,
        Crew: 2,
        CargoCapacity: 300,  
        SpecialAbility: "Infinite Improbability",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Heartofgold.webp"
    },
    {
        Name: "TARDIS",
        Speed: "Faster than Light",  
        Firepower: 70,
        Defense: 100,
        Crew: 1,
        CargoCapacity: "Unlimited",  
        SpecialAbility: "Time Travel",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Tardis.webp"
    },
    {
        Name: "Slave I",
        Speed: 538,  
        Firepower: 85,
        Defense: 80,
        Crew: 1,
        CargoCapacity: 50,  
        SpecialAbility: "Tracking",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Slave1.webp"
    },
    {
        Name: "Nostromo",
        Speed: 308,  
        Firepower: 50,
        Defense: 70,
        Crew: 7,
        CargoCapacity: 2000,  
        SpecialAbility: "Heavy Freighter",
        Image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg"
    },
    {
        Name: "Red Dwarf",
        Speed: 231,  
        Firepower: 40,
        Defense: 60,
        Crew: 3,
        CargoCapacity: 1000,  
        SpecialAbility: "Hologram Creation",
        Image: "Assets/Images/sci-fi-ships-toptrumps/red_dwarf.jpg"
    },
    {
        Name: "Eagle 5",
        Speed: 192,  
        Firepower: 55,
        Defense: 45,
        Crew: 2,
        CargoCapacity: 100,  
        SpecialAbility: "Space Travel",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Eagle-five.jpg"
    },
    {
        Name: "Normandy SR-2",
        Speed: 615,  
        Firepower: 80,
        Defense: 85,
        Crew: 25,
        CargoCapacity: 500,  
        SpecialAbility: "Stealth Systems",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Normandy-SR2.avif"
    },
    {
        Name: "Event Horizon",
        Speed: "Faster than Light",  
        Firepower: 95,
        Defense: 70,
        Crew: 8,
        CargoCapacity: 200,  
        SpecialAbility: "Interdimensional Travel",
        Image: "Assets/Images/sci-fi-ships-toptrumps/event-horizon.jpg"
    },
    {
        Name: "Discovery One",
        Speed: 385,  
        Firepower: 60,
        Defense: 70,
        Crew: 5,
        CargoCapacity: 250,  
        SpecialAbility: "AI Control",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Discovery_One.jpg"
    },
    {
        Name: "Razor Crest",
        Speed: 538,  
        Firepower: 80,
        Defense: 75,
        Crew: 2,
        CargoCapacity: 150,  
        SpecialAbility: "Gunship",
        Image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg"
    },
    {
        Name: "Andromeda Ascendant",
        Speed: 1000,  
        Firepower: 95,
        Defense: 90,
        Crew: 4000,
        CargoCapacity: 3000,  
        SpecialAbility: "AI Command",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Andromeda.webp"
    },
    {
        Name: "Planet Express Ship",
        Speed: 500,  
        Firepower: 75,
        Defense: 65,
        Crew: 3,
        CargoCapacity: 120,  
        SpecialAbility: "Deliveries",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Planetx.webp"
    },
    {
        Name: "Moya",
        Speed: 385,  
        Firepower: 65,
        Defense: 80,
        Crew: 5,
        CargoCapacity: 1500,  
        SpecialAbility: "Living Ship",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Moya.webp"
    },
    {
        Name: "Lexx",//////////////////////
        Speed: 769,  
        Firepower: 100,
        Defense: 85,
        Crew: 4,
        CargoCapacity: 500,  
        SpecialAbility: "Planet Destruction",
        Image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg"
    },
    {
        Name: "Gunstar",
        Speed: 577,  
        Firepower: 90,
        Defense: 70,
        Crew: 2,
        CargoCapacity: 100,  
        SpecialAbility: "Starfighter",
        Image: "Assets/Images/sci-fi-ships-toptrumps/Gunstar_Starfighter.webp"
    },
    {
        Name: "The Bebop",
        Speed: 308,  
        Firepower: 65,
        Defense: 55,
        Crew: 4,
        CargoCapacity: 80,  
        SpecialAbility: "Bounty Hunting",
        Image: "Assets/Images/sci-fi-ships-toptrumps/The-Bebop.jpeg"
    },
    {
        Name: "Elysium",///////////////////////////
        Speed: 269,  
        Firepower: 75,
        Defense: 70,
        Crew: 12,
        CargoCapacity: 300,  
        SpecialAbility: "Medical Ship",
        Image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg"
    },
    {
        Name: "X-Wing",
        Speed: 654,  
        Firepower: 85,
        Defense: 60,
        Crew: 1,
        CargoCapacity: 50,  
        SpecialAbility: "Dogfighting",
        Image: "Assets/Images/sci-fi-ships-toptrumps/x-wing.jpg"
    },
    {
        Name: "Tie Fighter",
        Speed: 654,  
        Firepower: 75,
        Defense: 55,
        Crew: 1,
        CargoCapacity: 30,  
        SpecialAbility: "High Speed",
        Image: "Assets/Images/sci-fi-ships-toptrumps/tie-fighter.jpg"
    },
    {
        Name: "Executor",
        Speed: 500,  
        Firepower: 100,
        Defense: 90,
        Crew: 28000,
        CargoCapacity: 5000,  
        SpecialAbility: "Super Star Destroyer",
        Image: "Assets/Images/sci-fi-ships-toptrumps/executor.jpg"
    }
]

let p1Deck;
let cpuDeck;
let p1Card;
let cpuCard;
const drawContainer = [];
const keys = Object.keys(currentDeck[0]);

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let turn
let winnner
let cardsLeftP1
let cardsLeftCpu



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CACHED ELEMENT REFERENCES- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Cached Elements for P1 Card
const p1CardTitle = document.querySelector("#p1Title")
const p1CardImg = document.querySelector("#p1Img")
const p1Category1 = document.querySelector("#p1Cat1")
const p1Category2 = document.querySelector("#p1Cat2")
const p1Category3 = document.querySelector("#p1Cat3")
const p1Category4 = document.querySelector("#p1Cat4")
const p1Category5 = document.querySelector("#p1Cat5")
const p1Category6 = document.querySelector("#p1Cat6")

const p1Info1 = document.querySelector("#p1Info1")
const p1Info2 = document.querySelector("#p1Info2")
const p1Info3 = document.querySelector("#p1Info3")
const p1Info4 = document.querySelector("#p1Info4")
const p1Info5 = document.querySelector("#p1Info5")
const p1Info6 = document.querySelector("#p1Info6")

//Cached Elements for CPU Card
const cpuCardTitle = document.querySelector("#cpuTitle")
const cpuCardImg = document.querySelector("#cpuImg")
const cpuCategory1 = document.querySelector("#cpuCat1")
const cpuCategory2 = document.querySelector("#cpuCat2")
const cpuCategory3 = document.querySelector("#cpuCat3")
const cpuCategory4 = document.querySelector("#cpuCat4")
const cpuCategory5 = document.querySelector("#cpuCat5")
const cpuCategory6 = document.querySelector("#cpuCat6")

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


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -FUNCTIONS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//Show/hide How To Play Info Box
const handleHowToPlay = (event) => {
    //console.log("How2 btn clicked")
    howToPlayBox.classList.toggle("show-how-to-play-box");
}

//Ramdomly shuffle the deck
const shuffle = (currentDeck) => {
    for (let i = currentDeck.length -1; i > 0; i--) {
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
deal()
//console.log(shuffledDeck)
// console.log(p1Deck)
// console.log(cpuDeck)


const renderCardInfo = (p1Card, cpuCard) =>{
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
renderCardInfo()

// For init() Set the categories for the deck of cards that has been chosen.
// Better to just do that once on init than having to re-render along with the info each time
let speed = keys[1]
let firepower = keys[2]
let defense = keys[3]
let crew = keys[4]
let cargoCapacity = keys[5]
let specialAbility = keys[6]
const renderCategories = () => {
    p1Cat1.innerHTML = `${speed}`
    p1Cat2.innerHTML = `${firepower}`
    p1Cat3.innerHTML = `${defense}`
    p1Cat4.innerHTML = `${crew}`
    p1Cat5.innerHTML = `${cargoCapacity}`
    p1Cat6.innerHTML = `${specialAbility}`

    cpuCat1.innerHTML = `${speed}`
    cpuCat2.innerHTML = `${firepower}`
    cpuCat3.innerHTML = `${defense}`
    cpuCat4.innerHTML = `${crew}`
    cpuCat5.innerHTML = `${cargoCapacity}`
    cpuCat6.innerHTML = `${specialAbility}`
}
renderCategories()
let playerSelected = null
const handleSelection = (event, p1Card, playerSelected) => {
    let playerSelection = event.target.id;
    p1Card = p1Deck[0]
    if(playerSelection === "p1Cat1"){
        playerSelected = p1Card[`${keys[1]}`]
    } else if(playerSelection === "p1Cat2") {
        playerSelected = p1Card[`${keys[2]}`]
    } else if(playerSelection === "p1Cat3") {
        playerSelected = p1Card[`${keys[3]}`]
    } else if(playerSelection === "p1Cat4") {
        playerSelected = p1Card[`${keys[4]}`]
    } else if(playerSelection === "p1Cat5") {
        playerSelected = p1Card[`${keys[5]}`]
    } else if(playerSelection === "p1Cat6") {
        playerSelected = p1Card[`${keys[6]}`]
    }
    return playerSelected
}
///Got this far so far so good but need to check if I am going to be able to use the plyaerSelected
//Return value to compare cards.

const compareHand = () => {
    if (p1Card[`${keys[1]}`] > cpuCard[`${keys[1]}`]) {
        console.log("Player 1 Wins")
    }
}

const init = () => {
    
}
const playGame = () => {
    handleSelection()
    compareHand()    
}

// const test = () =>{
    
// }

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//startBtn.addEventListener('click', test)
//endGameBtn.addEventListener('click', )
howToPlayBtn.addEventListener('click', handleHowToPlay)
p1Category1.addEventListener('click', handleSelection)
p1Category2.addEventListener('click', handleSelection)
p1Category3.addEventListener('click', handleSelection)
p1Category4.addEventListener('click', handleSelection)
p1Category5.addEventListener('click', handleSelection)
p1Category5.addEventListener('click', handleSelection)
p1Category6.addEventListener('click', handleSelection)