const scifiVessels = [
    {
        name: "Millennium Falcon",
        image: "Assets/Images/sci-fi-ships-toptrumps/millennium-falcon.jpg",
        speed: 654,
        firepower: 85,
        defense: 75,
        crew: 4,
        cargoCapacity: 100,
        // specialAbility: "Smuggling"
    },
    {
        name: "USS Enterprise",
        image: "Assets/Images/sci-fi-ships-toptrumps/USS-Enterprise-next-generation.avif",
        speed: 577,
        firepower: 90,
        defense: 85,
        crew: 1012,
        cargoCapacity: 700,
        // specialAbility: "Warp Speed"
    },
    {
        name: "Serenity",
        image: "Assets/Images/sci-fi-ships-toptrumps/serenity.jpg",
        speed: 500,
        firepower: 65,
        defense: 50,
        crew: 9,
        cargoCapacity: 200,
        // specialAbility: "Outmaneuver"
    },
    {
        name: "Battlestar Galactica",
        image: "Assets/Images/sci-fi-ships-toptrumps/battlestar_galactica.webp",
        speed: 462,
        firepower: 95,
        defense: 90,
        crew: 2600,
        cargoCapacity: 4000,
        // specialAbility: "Heavy Armor"
    },
    {
        name: "Heart of Gold",
        image: "Assets/Images/sci-fi-ships-toptrumps/Heartofgold.webp",
        speed: 1000,
        firepower: 60,
        defense: 50,
        crew: 2,
        cargoCapacity: 300,
        // specialAbility: "Infinite Improbability"
    },
    {
        name: "TARDIS",
        image: "Assets/Images/sci-fi-ships-toptrumps/Tardis.webp",
        speed: "FTL",
        firepower: 70,
        defense: 100,
        crew: 1,
        cargoCapacity: "Unlimited",
        // specialAbility: "Time Travel"
    },
    {
        name: "Slave I",
        image: "Assets/Images/sci-fi-ships-toptrumps/Slave1.jpg",
        speed: 538,
        firepower: 85,
        defense: 80,
        crew: 1,
        cargoCapacity: 50,
        // specialAbility: "Tracking"
    },
    {
        name: "Nostromo",
        image: "Assets/Images/sci-fi-ships-toptrumps/Nostromo.png",
        speed: 308,
        firepower: 50,
        defense: 70,
        crew: 7,
        cargoCapacity: 2000,
        // specialAbility: "Heavy Freighter"
    },
    {
        name: "Red Dwarf",
        image: "Assets/Images/sci-fi-ships-toptrumps/red_dwarf.jpg",
        speed: 231,
        firepower: 40,
        defense: 60,
        crew: 3,
        cargoCapacity: 1000,
        // specialAbility: "Hologram Creation"
    },
    {
        name: "Eagle 5",
        image: "Assets/Images/sci-fi-ships-toptrumps/Eagle-five.jpg",
        speed: 192,
        firepower: 55,
        defense: 45,
        crew: 2,
        cargoCapacity: 100,
        // specialAbility: "Space Travel"
    },
    {
        name: "Normandy SR-2",
        image: "Assets/Images/sci-fi-ships-toptrumps/Normandy-SR2.avif",
        speed: 615,
        firepower: 80,
        defense: 85,
        crew: 25,
        cargoCapacity: 500,
        // specialAbility: "Stealth Systems"
    },
    {
        name: "Event Horizon",
        image: "Assets/Images/sci-fi-ships-toptrumps/event-horizon.jpg",
        speed: "FTL",
        firepower: 95,
        defense: 70,
        crew: 8,
        cargoCapacity: 200,
        // specialAbility: "Interdimensional Travel"
    },
    {
        name: "Discovery One",
        image: "Assets/Images/sci-fi-ships-toptrumps/Discovery_one.jpeg",
        speed: 385,
        firepower: 60,
        defense: 70,
        crew: 5,
        cargoCapacity: 250,
        // specialAbility: "AI Control"
    },
    {
        name: "Razor Crest",
        image: "Assets/Images/sci-fi-ships-toptrumps/Razor_Crest.webp",
        speed: 538,
        firepower: 80,
        defense: 75,
        crew: 2,
        cargoCapacity: 150,
        // specialAbility: "Gunship"
    },
    {
        name: "Andromeda Ascendant",
        image: "Assets/Images/sci-fi-ships-toptrumps/Andromeda.webp",
        speed: 1000,
        firepower: 95,
        defense: 90,
        crew: 4000,
        cargoCapacity: 3000,
        // specialAbility: "AI Command"
    },
    {
        name: "Planet Express Ship",
        image: "Assets/Images/sci-fi-ships-toptrumps/Planetx.webp",
        speed: 500,
        firepower: 75,
        defense: 65,
        crew: 3,
        cargoCapacity: 120,
        // specialAbility: "Deliveries"
    },
    {
        name: "Moya",
        image: "Assets/Images/sci-fi-ships-toptrumps/Moya.webp",
        speed: 385,
        firepower: 65,
        defense: 80,
        crew: 5,
        cargoCapacity: 1500,
        // specialAbility: "Living Ship"
    },
    {
        name: "Lexx",
        image: "Assets/Images/sci-fi-ships-toptrumps/Lexx.webp",
        speed: 769,
        firepower: 100,
        defense: 85,
        crew: 4,
        cargoCapacity: 500,
        // specialAbility: "Planet Destruction"
    },
    {
        name: "Gunstar",
        image: "Assets/Images/sci-fi-ships-toptrumps/Gunstar_Starfighter.webp",
        speed: 577,
        firepower: 90,
        defense: 70,
        crew: 2,
        cargoCapacity: 100,
        // specialAbility: "Starfighter"
    },
    {
        name: "The Bebop",
        image: "Assets/Images/sci-fi-ships-toptrumps/The-Bebop.jpeg",
        speed: 308,
        firepower: 65,
        defense: 55,
        crew: 4,
        cargoCapacity: 80,
        // specialAbility: "Bounty Hunting"
    },
    {
        name: "X-Wing",
        image: "Assets/Images/sci-fi-ships-toptrumps/x-wing.jpg",
        speed: 654,
        firepower: 85,
        defense: 60,
        crew: 1,
        cargoCapacity: 50,
        // specialAbility: "Dogfighting"
    },
    {
        name: "Tie Fighter",
        image: "Assets/Images/sci-fi-ships-toptrumps/tie-fighter.jpg",
        speed: 654,
        firepower: 75,
        defense: 55,
        crew: 1,
        cargoCapacity: 30,
        // specialAbility: "High Speed"
    },
    {
        name: "Executor",
        image: "Assets/Images/sci-fi-ships-toptrumps/executor.jpg",
        speed: 500,
        firepower: 100,
        defense: 90,
        crew: 28000,
        cargoCapacity: 5000,
        // specialAbility: "Super Star Destroyer"
    },
    {
        name: "Sulaco",
        image: "Assets/Images/sci-fi-ships-toptrumps/Sulaco.webp",
        speed: 600,
        firepower: 85,
        defense: 80,
        crew: 90,
        cargoCapacity: 1200,
        // specialAbility: "Orbital Insertion"
    }
];

const fierceAnimals = [
    {
        name: "Lion",
        image: "Assets/Images/fierce-animals/Lion.jpg",
        strength: 18,
        speed: 15,
        intelligence: 12,
        stealth: 10,
        aggression: 17
    },
    {
        name: "Tiger",
        image: "Assets/Images/fierce-animals/Tiger.jpeg",
        strength: 19,
        speed: 16,
        intelligence: 13,
        stealth: 14,
        aggression: 18
    },
    {
        name: "Grizzly Bear",
        image: "Assets/Images/fierce-animals/Grizzly-bear.jpg",
        strength: 20,
        speed: 12,
        intelligence: 10,
        stealth: 8,
        aggression: 16
    },
    {
        name: "Crocodile",
        image: "Assets/Images/fierce-animals/Crocodile.jpg",
        strength: 17,
        speed: 10,
        intelligence: 9,
        stealth: 15,
        aggression: 18
    },
    {
        name: "Wolf",
        image: "Assets/Images/fierce-animals/Wolf.jpeg",
        strength: 12,
        speed: 14,
        intelligence: 16,
        stealth: 13,
        aggression: 12
    },
    {
        name: "Great White Shark",
        image: "Assets/Images/fierce-animals/Great-white.jpg",
        strength: 20,
        speed: 17,
        intelligence: 8,
        stealth: 12,
        aggression: 19
    },
    {
        name: "Komodo Dragon",
        image: "Assets/Images/fierce-animals/Komodo_dragon.jpg",
        strength: 15,
        speed: 9,
        intelligence: 7,
        stealth: 8,
        aggression: 16
    },
    {
        name: "Jaguar",
        image: "Assets/Images/fierce-animals/Jaguar.jpg",
        strength: 16,
        speed: 18,
        intelligence: 14,
        stealth: 16,
        aggression: 17
    },
    {
        name: "Bald Eagle",
        image: "Assets/Images/fierce-animals/Bald_egal.jpeg",
        strength: 8,
        speed: 20,
        intelligence: 15,
        stealth: 12,
        aggression: 10
    },
    {
        name: "Black Mamba",
        image: "Assets/Images/fierce-animals/Black_mamba.webp",
        strength: 6,
        speed: 19,
        intelligence: 8,
        stealth: 17,
        aggression: 15
    },
    {
        name: "Elephant",
        image: "Assets/Images/fierce-animals/Elephant.jpeg",
        strength: 20,
        speed: 10,
        intelligence: 18,
        stealth: 4,
        aggression: 14
    },
    {
        name: "Rhinoceros",
        image: "Assets/Images/fierce-animals/Rhino.jpg",
        strength: 19,
        speed: 12,
        intelligence: 10,
        stealth: 3,
        aggression: 18
    },
    {
        name: "Hippopotamus",
        image: "Assets/Images/fierce-animals/Hippo.jpeg",
        strength: 18,
        speed: 15,
        intelligence: 10,
        stealth: 5,
        aggression: 20
    },
    {
        name: "Polar Bear",
        image: "Assets/Images/fierce-animals/Polar-bear.jpg",
        strength: 19,
        speed: 12,
        intelligence: 14,
        stealth: 7,
        aggression: 16
    },
    {
        name: "Snow Leopard",
        image: "Assets/Images/fierce-animals/Snow_leopard.jpeg",
        strength: 16,
        speed: 18,
        intelligence: 14,
        stealth: 17,
        aggression: 14
    },
    {
        name: "Bison",
        image: "Assets/Images/fierce-animals/Bison.jpg",
        strength: 18,
        speed: 10,
        intelligence: 8,
        stealth: 6,
        aggression: 17
    },
    {
        name: "Gorilla",
        image: "Assets/Images/fierce-animals/Gorilla.jpg",
        strength: 17,
        speed: 10,
        intelligence: 15,
        stealth: 5,
        aggression: 16
    },
    {
        name: "Buffalo",
        image: "Assets/Images/fierce-animals/Buffalo.webp",
        strength: 20,
        speed: 11,
        intelligence: 7,
        stealth: 4,
        aggression: 19
    },
    {
        name: "Leopard",
        image: "Assets/Images/fierce-animals/Leopard.jpg",
        strength: 16,
        speed: 20,
        intelligence: 14,
        stealth: 18,
        aggression: 15
    },
    {
        name: "Hyena",
        image: "Assets/Images/fierce-animals/Hyena.jpeg",
        strength: 15,
        speed: 14,
        intelligence: 12,
        stealth: 16,
        aggression: 18
    },
    {
        name: "Puma",
        image: "Assets/Images/fierce-animals/Puma.webp",
        strength: 17,
        speed: 18,
        intelligence: 12,
        stealth: 16,
        aggression: 14
    },
    {
        name: "Alligator",
        image: "Assets/Images/fierce-animals/Alligator.jpg",
        strength: 16,
        speed: 11,
        intelligence: 10,
        stealth: 14,
        aggression: 18
    },
    {
        name: "Mantis Shrimp",
        image: "Assets/Images/fierce-animals/Mantis_shrimp.jpg",
        strength: 12,
        speed: 20,
        intelligence: 10,
        stealth: 19,
        aggression: 18
    },
    {
        name: "Cassowary",
        image: "Assets/Images/fierce-animals/Cassowary.webp",
        strength: 15,
        speed: 18,
        intelligence: 9,
        stealth: 14,
        aggression: 17
    }
];

const dinosaurs = [
    {
        name: "Tyrannosaurus Rex",
        image: "Assets/Images/Dinosaurs/T-rex.png",
        size: 9,
        speed: 12,
        intelligence: 7,
        ferocity: 18,
        defense: 15
    },
    {
        name: "Velociraptor",
        image: "Assets/Images/Dinosaurs/Velociraptor.png",
        size: 4,
        speed: 18,
        intelligence: 15,
        ferocity: 14,
        defense: 6
    },
    {
        name: "Triceratops",
        image: "Assets/Images/Dinosaurs/Triceratops.jpg",
        size: 8,
        speed: 8,
        intelligence: 6,
        ferocity: 12,
        defense: 18
    },
    {
        name: "Spinosaurus",
        image: "Assets/Images/Dinosaurs/Spinosaurus.gif",
        size: 10,
        speed: 11,
        intelligence: 8,
        ferocity: 17,
        defense: 14
    },
    {
        name: "Stegosaurus",
        image: "Assets/Images/Dinosaurs/Stegosaurus.png",
        size: 8,
        speed: 6,
        intelligence: 4,
        ferocity: 10,
        defense: 16
    },
    {
        name: "Ankylosaurus",
        image: "Assets/Images/Dinosaurs/Ankylosaurus.jpeg",
        size: 7,
        speed: 5,
        intelligence: 5,
        ferocity: 11,
        defense: 19
    },
    {
        name: "Brachiosaurus",
        image: "Assets/Images/Dinosaurs/Brachiosaurus.png",
        size: 10,
        speed: 4,
        intelligence: 6,
        ferocity: 7,
        defense: 15
    },
    {
        name: "Allosaurus",
        image: "Assets/Images/Dinosaurs/Allosaurus.jpg",
        size: 8,
        speed: 13,
        intelligence: 8,
        ferocity: 16,
        defense: 12
    },
    {
        name: "Pteranodon",
        image: "Assets/Images/Dinosaurs/Pteranodon.jpg",
        size: 4,
        speed: 19,
        intelligence: 10,
        ferocity: 13,
        defense: 7
    },
    {
        name: "Carnotaurus",
        image: "Assets/Images/Dinosaurs/Carnotaurus.png",
        size: 7,
        speed: 14,
        intelligence: 7,
        ferocity: 15,
        defense: 9
    },
    {
        name: "Diplodocus",
        image: "Assets/Images/Dinosaurs/Diplodocus.jpg",
        size: 10,
        speed: 5,
        intelligence: 5,
        ferocity: 6,
        defense: 14
    },
    {
        name: "Iguanodon",
        image: "Assets/Images/Dinosaurs/Iguanodon.jpg",
        size: 7,
        speed: 9,
        intelligence: 7,
        ferocity: 9,
        defense: 12
    },
    {
        name: "Megalosaurus",
        image: "Assets/Images/Dinosaurs/Megalosaurus.jpeg",
        size: 8,
        speed: 11,
        intelligence: 7,
        ferocity: 15,
        defense: 10
    },
    {
        name: "Pachycephalosaurus",
        image: "Assets/Images/Dinosaurs/Pachycephalosaurus.png",
        size: 6,
        speed: 10,
        intelligence: 6,
        ferocity: 11,
        defense: 13
    },
    {
        name: "Suchomimus",
        image: "Assets/Images/Dinosaurs/Suchomimus.jpg",
        size: 9,
        speed: 12,
        intelligence: 7,
        ferocity: 16,
        defense: 12
    },
    {
        name: "Plesiosaurus",
        image: "Assets/Images/Dinosaurs/Plesiosaurus.gif",
        size: 7,
        speed: 12,
        intelligence: 5,
        ferocity: 8,
        defense: 10
    },
    {
        name: "Utahraptor",
        image: "Assets/Images/Dinosaurs/Utahraptor.jpg",
        size: 6,
        speed: 17,
        intelligence: 13,
        ferocity: 15,
        defense: 8
    },
    {
        name: "Ceratosaurus",
        image: "Assets/Images/Dinosaurs/Ceratosaurus.jpg",
        size: 7,
        speed: 12,
        intelligence: 6,
        ferocity: 14,
        defense: 10
    },
    {
        name: "Coelophysis",
        image: "Assets/Images/Dinosaurs/Coelophysis.webp",
        size: 3,
        speed: 16,
        intelligence: 9,
        ferocity: 10,
        defense: 6
    },
    {
        name: "Giganotosaurus",
        image: "Assets/Images/Dinosaurs/Gigantosaurus.jpeg",
        size: 10,
        speed: 10,
        intelligence: 7,
        ferocity: 18,
        defense: 14
    },
    {
        name: "Megaraptor",
        image: "Assets/Images/Dinosaurs/Megaraptor.jpg",
        size: 8,
        speed: 15,
        intelligence: 9,
        ferocity: 16,
        defense: 10
    },
    {
        name: "Ornithomimus",
        image: "Assets/Images/Dinosaurs/Ornithomimus.png",
        size: 4,
        speed: 20,
        intelligence: 10,
        ferocity: 8,
        defense: 7
    },
    {
        name: "Saurophaganax",
        image: "Assets/Images/Dinosaurs/Saurophaganax.jpg",
        size: 9,
        speed: 11,
        intelligence: 7,
        ferocity: 17,
        defense: 13
    },
    {
        name: "Styracosaurus",
        image: "Assets/Images/Dinosaurs/Styracosaurus.png",
        size: 8,
        speed: 7,
        intelligence: 6,
        ferocity: 12,
        defense: 18
    }
];

const britishMonarchs = [
    {
        name: "Henry VIII",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 38,
        popularity: 65,
        militaryStrength: 85,
        politicalSkill: 75,
        influence: 90
    },
    {
        name: "Elizabeth I",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 45,
        popularity: 95,
        militaryStrength: 80,
        politicalSkill: 95,
        influence: 100
    },
    {
        name: "Victoria",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 63,
        popularity: 85,
        militaryStrength: 60,
        politicalSkill: 90,
        influence: 95
    },
    {
        name: "William the Conqueror",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 20,
        popularity: 70,
        militaryStrength: 100,
        politicalSkill: 80,
        influence: 90
    },
    {
        name: "Richard the Lionheart",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 10,
        popularity: 75,
        militaryStrength: 95,
        politicalSkill: 65,
        influence: 80
    },
    {
        name: "Edward I",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 35,
        popularity: 60,
        militaryStrength: 90,
        politicalSkill: 85,
        influence: 85
    },
    {
        name: "Charles I",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 24,
        popularity: 40,
        militaryStrength: 60,
        politicalSkill: 55,
        influence: 65
    },
    {
        name: "George III",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 59,
        popularity: 50,
        militaryStrength: 55,
        politicalSkill: 65,
        influence: 75
    },
    {
        name: "Mary I",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 5,
        popularity: 35,
        militaryStrength: 50,
        politicalSkill: 60,
        influence: 55
    },
    {
        name: "James I",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 22,
        popularity: 55,
        militaryStrength: 50,
        politicalSkill: 75,
        influence: 70
    },
    {
        name: "Edward III",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 50,
        popularity: 70,
        militaryStrength: 90,
        politicalSkill: 85,
        influence: 90
    },
    {
        name: "Anne",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 12,
        popularity: 65,
        militaryStrength: 50,
        politicalSkill: 75,
        influence: 70
    },
    {
        name: "Henry V",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 9,
        popularity: 75,
        militaryStrength: 95,
        politicalSkill: 80,
        influence: 85
    },
    {
        name: "George VI",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 16,
        popularity: 80,
        militaryStrength: 55,
        politicalSkill: 70,
        influence: 75
    },
    {
        name: "Edward IV",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 22,
        popularity: 70,
        militaryStrength: 85,
        politicalSkill: 80,
        influence: 80
    },
    {
        name: "Elizabeth II",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 70,
        popularity: 100,
        militaryStrength: 50,
        politicalSkill: 90,
        influence: 100
    },
    {
        name: "John",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 17,
        popularity: 30,
        militaryStrength: 40,
        politicalSkill: 50,
        influence: 45
    },
    {
        name: "Charles II",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 25,
        popularity: 65,
        militaryStrength: 55,
        politicalSkill: 80,
        influence: 70
    },
    {
        name: "Richard III",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 2,
        popularity: 40,
        militaryStrength: 75,
        politicalSkill: 60,
        influence: 55
    },
    {
        name: "Matilda",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 1,
        popularity: 45,
        militaryStrength: 65,
        politicalSkill: 70,
        influence: 60
    },
    {
        name: "Henry II",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 34,
        popularity: 60,
        militaryStrength: 85,
        politicalSkill: 90,
        influence: 85
    },
    {
        name: "James II",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 3,
        popularity: 35,
        militaryStrength: 50,
        politicalSkill: 55,
        influence: 45
    },
    {
        name: "William III",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 13,
        popularity: 55,
        militaryStrength: 70,
        politicalSkill: 75,
        influence: 65
    },
    {
        name: "Harold Godwinson",
        image: "Assets/Images/place-holder-image.jpg",
        reign: 0,
        popularity: 50,
        militaryStrength: 80,
        politicalSkill: 60,
        influence: 55
    }
];
