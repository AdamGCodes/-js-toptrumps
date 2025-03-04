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
        image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg",
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
        image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg",
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
        image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg",
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
        name: "Elysium",
        image: "Assets/Images/sci-fi-ships-toptrumps/50s_rocket.jpg",
        speed: 269,
        firepower: 75,
        defense: 70,
        crew: 12,
        cargoCapacity: 300,
        // specialAbility: "Medical Ship"
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
    }
];

const fierceAnimals = [
    {
        name: "Lion",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 18,
        speed: 15,
        intelligence: 12,
        stealth: 10,
        aggression: 17
    },
    {
        name: "Tiger",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 19,
        speed: 16,
        intelligence: 13,
        stealth: 14,
        aggression: 18
    },
    {
        name: "Grizzly Bear",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 20,
        speed: 12,
        intelligence: 10,
        stealth: 8,
        aggression: 16
    },
    {
        name: "Crocodile",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 17,
        speed: 10,
        intelligence: 9,
        stealth: 15,
        aggression: 18
    },
    {
        name: "Wolf",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 12,
        speed: 14,
        intelligence: 16,
        stealth: 13,
        aggression: 12
    },
    {
        name: "Great White Shark",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 20,
        speed: 17,
        intelligence: 8,
        stealth: 12,
        aggression: 19
    },
    {
        name: "Komodo Dragon",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 15,
        speed: 9,
        intelligence: 7,
        stealth: 8,
        aggression: 16
    },
    {
        name: "Jaguar",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 18,
        intelligence: 14,
        stealth: 16,
        aggression: 17
    },
    {
        name: "Bald Eagle",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 8,
        speed: 20,
        intelligence: 15,
        stealth: 12,
        aggression: 10
    },
    {
        name: "Black Mamba",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 6,
        speed: 19,
        intelligence: 8,
        stealth: 17,
        aggression: 15
    },
    {
        name: "Elephant",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 20,
        speed: 10,
        intelligence: 18,
        stealth: 4,
        aggression: 14
    },
    {
        name: "Rhinoceros",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 19,
        speed: 12,
        intelligence: 10,
        stealth: 3,
        aggression: 18
    },
    {
        name: "Hippopotamus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 18,
        speed: 15,
        intelligence: 10,
        stealth: 5,
        aggression: 20
    },
    {
        name: "Polar Bear",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 19,
        speed: 12,
        intelligence: 14,
        stealth: 7,
        aggression: 16
    },
    {
        name: "Snow Leopard",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 18,
        intelligence: 14,
        stealth: 17,
        aggression: 14
    },
    {
        name: "Bison",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 18,
        speed: 10,
        intelligence: 8,
        stealth: 6,
        aggression: 17
    },
    {
        name: "Gorilla",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 17,
        speed: 10,
        intelligence: 15,
        stealth: 5,
        aggression: 16
    },
    {
        name: "Buffalo",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 20,
        speed: 11,
        intelligence: 7,
        stealth: 4,
        aggression: 19
    },
    {
        name: "Leopard",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 20,
        intelligence: 14,
        stealth: 18,
        aggression: 15
    },
    {
        name: "Hyena",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 15,
        speed: 14,
        intelligence: 12,
        stealth: 16,
        aggression: 18
    },
    {
        name: "Puma",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 17,
        speed: 18,
        intelligence: 12,
        stealth: 16,
        aggression: 14
    },
    {
        name: "Alligator",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 11,
        intelligence: 10,
        stealth: 14,
        aggression: 18
    },
    {
        name: "Mantis Shrimp",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 12,
        speed: 20,
        intelligence: 10,
        stealth: 19,
        aggression: 18
    },
    {
        name: "Cassowary",
        image: "/Assets/Images/place-holder-image.jpg",
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
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 19,
        speed: 12,
        intelligence: 7,
        stealth: 8,
        aggression: 18
    },
    {
        name: "Velociraptor",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 10,
        speed: 18,
        intelligence: 15,
        stealth: 17,
        aggression: 14
    },
    {
        name: "Triceratops",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 18,
        speed: 8,
        intelligence: 6,
        stealth: 5,
        aggression: 12
    },
    {
        name: "Spinosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 20,
        speed: 11,
        intelligence: 8,
        stealth: 9,
        aggression: 17
    },
    {
        name: "Stegosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 6,
        intelligence: 4,
        stealth: 5,
        aggression: 10
    },
    {
        name: "Ankylosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 17,
        speed: 5,
        intelligence: 5,
        stealth: 6,
        aggression: 11
    },
    {
        name: "Brachiosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 14,
        speed: 4,
        intelligence: 6,
        stealth: 4,
        aggression: 7
    },
    {
        name: "Allosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 18,
        speed: 13,
        intelligence: 8,
        stealth: 9,
        aggression: 16
    },
    {
        name: "Pteranodon",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 9,
        speed: 19,
        intelligence: 10,
        stealth: 14,
        aggression: 13
    },
    {
        name: "Carnotaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 17,
        speed: 14,
        intelligence: 7,
        stealth: 10,
        aggression: 15
    },
    {
        name: "Iguanodon",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 12,
        speed: 7,
        intelligence: 6,
        stealth: 6,
        aggression: 9
    },
    {
        name: "Megalosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 10,
        intelligence: 7,
        stealth: 8,
        aggression: 14
    },
    {
        name: "Diplodocus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 13,
        speed: 5,
        intelligence: 6,
        stealth: 4,
        aggression: 6
    },
    {
        name: "Pachycephalosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 14,
        speed: 9,
        intelligence: 7,
        stealth: 7,
        aggression: 10
    },
    {
        name: "Therizinosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 15,
        speed: 8,
        intelligence: 7,
        stealth: 9,
        aggression: 12
    },
    {
        name: "Utahraptor",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 15,
        intelligence: 12,
        stealth: 14,
        aggression: 17
    },
    {
        name: "Ceratosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 17,
        speed: 12,
        intelligence: 6,
        stealth: 8,
        aggression: 16
    },
    {
        name: "Gallimimus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 8,
        speed: 20,
        intelligence: 10,
        stealth: 12,
        aggression: 8
    },
    {
        name: "Compsognathus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 6,
        speed: 16,
        intelligence: 8,
        stealth: 15,
        aggression: 7
    },
    {
        name: "Corythosaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 10,
        speed: 8,
        intelligence: 7,
        stealth: 6,
        aggression: 6
    },
    {
        name: "Majungasaurus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 16,
        speed: 11,
        intelligence: 6,
        stealth: 8,
        aggression: 15
    },
    {
        name: "Ornithomimus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 7,
        speed: 18,
        intelligence: 9,
        stealth: 11,
        aggression: 8
    },
    {
        name: "Suchomimus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 18,
        speed: 10,
        intelligence: 7,
        stealth: 8,
        aggression: 15
    },
    {
        name: "Deinonychus",
        image: "/Assets/Images/place-holder-image.jpg",
        strength: 14,
        speed: 15,
        intelligence: 12,
        stealth: 16,
        aggression: 16
    }
];
