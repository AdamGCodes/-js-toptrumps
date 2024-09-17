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
        CargoCapacity: 700,
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
        Image: "Assets/Images/sci-fi-ships-toptrumps/serenity.jpg"
    },
    {
        Name: "Battlestar Galactica",
        Speed: 462,
        Firepower: 95,
        Defense: 90,
        Crew: 2600,
        CargoCapacity: 4000,
        SpecialAbility: "Heavy Armor",
        Image: "Assets/Images/sci-fi-ships-toptrumps/battlestar_galactica.webp"
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
        Image: "Assets/Images/sci-fi-ships-toptrumps/Slave1.jpg"
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
        Image: "Assets/Images/sci-fi-ships-toptrumps/Discovery_one.jpeg"
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