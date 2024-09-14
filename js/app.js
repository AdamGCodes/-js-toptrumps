
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
        Image: "https://placeholder.url/millennium_falcon"
    },
    {
        Name: "USS Enterprise (NCC-1701-D)",
        Speed: 577,  
        Firepower: 90,
        Defense: 85,
        Crew: 1012,
        CargoCapacity: 700 ,  
        SpecialAbility: "Warp Speed",
        Image: "https://placeholder.url/uss_enterprise"
    },
    {
        Name: "Serenity",
        Speed: 500,  
        Firepower: 65,
        Defense: 50,
        Crew: 9,
        CargoCapacity: 200,  
        SpecialAbility: "Outmaneuver",
        Image: "https://placeholder.url/serenity"
    },
    {
        Name: "Battlestar Galactica",
        Speed: 462,  
        Firepower: 95,
        Defense: 90,
        Crew: 2600,
        CargoCapacity: 4000,  
        SpecialAbility: "Heavy Armor",
        Image: "https://placeholder.url/battlestar_galactica"
    },
    {
        Name: "Heart of Gold",
        Speed: 1000,  
        Firepower: 60,
        Defense: 50,
        Crew: 2,
        CargoCapacity: 300,  
        SpecialAbility: "Infinite Improbability",
        Image: "https://placeholder.url/heart_of_gold"
    },
    {
        Name: "TARDIS",
        Speed: "Faster than Light",  
        Firepower: 70,
        Defense: 100,
        Crew: 1,
        CargoCapacity: "Unlimited",  
        SpecialAbility: "Time Travel",
        Image: "https://placeholder.url/tardis"
    },
    {
        Name: "Slave I",
        Speed: 538,  
        Firepower: 85,
        Defense: 80,
        Crew: 1,
        CargoCapacity: 50,  
        SpecialAbility: "Tracking",
        Image: "https://placeholder.url/slave_one"
    },
    {
        Name: "Nostromo",///////////////////////////////////////////////////
        Speed: 308,  
        Firepower: 50,
        Defense: 70,
        Crew: 7,
        CargoCapacity: 2000,  
        SpecialAbility: "Heavy Freighter",
        Image: "https://placeholder.url/nostromo"
    },
    {
        Name: "Red Dwarf",////////////////////////////////////
        Speed: 231,  
        Firepower: 40,
        Defense: 60,
        Crew: 3,
        CargoCapacity: 1000,  
        SpecialAbility: "Hologram Creation",
        Image: "https://placeholder.url/red_dwarf"
    },
    {
        Name: "Eagle 5",///////////////////////////////////
        Speed: 192,  
        Firepower: 55,
        Defense: 45,
        Crew: 2,
        CargoCapacity: 100,  
        SpecialAbility: "Space Travel",
        Image: "https://placeholder.url/eagle_5"
    },
    {
        Name: "Normandy SR-2",//////////////////////////
        Speed: 615,  
        Firepower: 80,
        Defense: 85,
        Crew: 25,
        CargoCapacity: 500,  
        SpecialAbility: "Stealth Systems",
        Image: "https://placeholder.url/normandy_sr2"
    },
    {
        Name: "Event Horizon",///////////////////////
        Speed: "Faster than Light",  
        Firepower: 95,
        Defense: 70,
        Crew: 8,
        CargoCapacity: 200,  
        SpecialAbility: "Interdimensional Travel",
        Image: "https://placeholder.url/event_horizon"
    },
    {
        Name: "Discovery One",/////////////////////
        Speed: 385,  
        Firepower: 60,
        Defense: 70,
        Crew: 5,
        CargoCapacity: 250,  
        SpecialAbility: "AI Control",
        Image: "https://placeholder.url/discovery_one"
    },
    {
        Name: "Razor Crest",
        Speed: 538,  
        Firepower: 80,
        Defense: 75,
        Crew: 2,
        CargoCapacity: 150,  
        SpecialAbility: "Gunship",
        Image: "https://placeholder.url/razor_crest"
    },
    {
        Name: "Andromeda Ascendant",
        Speed: 1000,  
        Firepower: 95,
        Defense: 90,
        Crew: 4000,
        CargoCapacity: 3000,  
        SpecialAbility: "AI Command",
        Image: "https://placeholder.url/andromeda_ascendant"
    },
    {
        Name: "Planet Express Ship",
        Speed: 500,  
        Firepower: 75,
        Defense: 65,
        Crew: 3,
        CargoCapacity: 120,  
        SpecialAbility: "Deliveries",
        Image: "https://placeholder.url/planet_express"
    },
    {
        Name: "Moya",
        Speed: 385,  
        Firepower: 65,
        Defense: 80,
        Crew: 5,
        CargoCapacity: 1500,  
        SpecialAbility: "Living Ship",
        Image: "https://placeholder.url/moya"
    },
    {
        Name: "Lexx",//////////////////////
        Speed: 769,  
        Firepower: 100,
        Defense: 85,
        Crew: 4,
        CargoCapacity: 500,  
        SpecialAbility: "Planet Destruction",
        Image: "https://placeholder.url/lexx"
    },
    {
        Name: "Gunstar",//////////////
        Speed: 577,  
        Firepower: 90,
        Defense: 70,
        Crew: 2,
        CargoCapacity: 100,  
        SpecialAbility: "Starfighter",
        Image: "https://placeholder.url/gunstar"
    },
    {
        Name: "The Bebop",
        Speed: 308,  
        Firepower: 65,
        Defense: 55,
        Crew: 4,
        CargoCapacity: 80,  
        SpecialAbility: "Bounty Hunting",
        Image: "https://placeholder.url/the_bebop"
    },
    {
        Name: "Elysium",
        Speed: 269,  
        Firepower: 75,
        Defense: 70,
        Crew: 12,
        CargoCapacity: 300,  
        SpecialAbility: "Medical Ship",
        Image: "https://placeholder.url/elysium"
    },
    {
        Name: "X-Wing",
        Speed: 654,  
        Firepower: 85,
        Defense: 60,
        Crew: 1,
        CargoCapacity: 50,  
        SpecialAbility: "Dogfighting",
        Image: "https://placeholder.url/x_wing"
    },
    {
        Name: "Tie Fighter",
        Speed: 654,  
        Firepower: 75,
        Defense: 55,
        Crew: 1,
        CargoCapacity: 30,  
        SpecialAbility: "High Speed",
        Image: "https://placeholder.url/tie_fighter"
    },
    {
        Name: "Executor",
        Speed: 500,  
        Firepower: 100,
        Defense: 90,
        Crew: 28000,
        CargoCapacity: 5000,  
        SpecialAbility: "Super Star Destroyer",
        Image: "https://placeholder.url/executor"
    }
]


const plDeck = []
const cpuDeck = []
const p1Card = []
const cpuCard = []
const drawContainer = []

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -VARIABLES (STATE)- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let turn
let winnner
let cardsLeftP1
let cardsLeftCpu


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CACHED ELEMENT REFERENCES- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const p1CardTitle = document.querySelectorAll(".sqr")
const cpuCardTitle =
const p1CardImg = 
const cpuCardImg = 
const =
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -CONSTANTS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -FUNCTIONS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -EVENT LISTENERS- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>