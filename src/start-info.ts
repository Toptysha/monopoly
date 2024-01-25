import { Player } from "./types"

export const players: Player[] = [
    {
        isCurrentHero: false,
        name: 'Harry Potter',
        id: 'hp',
        position: 0,
        color: '#ab1515',
        side: true,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Hermione Granger',
        id: 'hg',
        position: 0,
        color: '#e9ec12',
        side: true,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Ron Weasley',
        id: 'rw',
        position: 0,
        color: '#dc8b18',
        side: true,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Albus Dumbledore',
        id: 'ad',
        position: 0,
        color: '#3cd728',
        side: true,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Peter Pettigrew',
        id: 'pp',
        position: 0,
        color: '#164310',
        side: false,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Lord Voldemort',
        id: 'lv',
        position: 0,
        color: '#301503',
        side: false,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Bellatrix Lestrange',
        id: 'bl',
        position: 0,
        color: '#073e48',
        side: false,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    },
    {
        isCurrentHero: false,
        name: 'Lucius Malfoy',
        id: 'lm',
        position: 0,
        color: '#35124c',
        side: false,
        budget: 1500,
        ownerOf: [],
        inPrison: false,
        rollDice: false
    }
]    

// export const owners: Owners = {
//     1: 'none',
//     3: 'none',
//     brownLineOwner: 'none',
//     6: 'none',
//     8: 'none',
//     9: 'none',
//     blueLineOwner: 'none',
//     11: 'none',
//     13: 'none',
//     14: 'none',
//     purpleLineOwner: 'none',
//     16: 'none',
//     18: 'none',
//     19: 'none',
//     orangeLineOwner: 'none',
//     21: 'none',
//     23: 'none',
//     24: 'none',
//     redLineOwner: 'none',
//     26: 'none',
//     27: 'none',
//     29: 'none',
//     yellowLineOwner: 'none',
//     31: 'none',
//     32: 'none',
//     34: 'none',
//     greenLineOwner: 'none',
//     37: 'none',
//     39: 'none',
//     darkblueLineOwner: 'none',

//     allies: {
//         'Professor Snape': 'none',
//         'Neville Longbottom': 'none',
//         'Draco Malfoy': 'none',
//         'Luna Lovegood': 'none'
//     },

//     deathlyHallows: {
//         'Cloak of Invisibility': 'none',
//         'Resurrection Stone': 'none',
//         'Elder Wand': 'none'
//     }
// }

export const owners = [
    {
        1: 'none',
        3: 'none',
        brownLineOwner: 'none',
        id: 'brownLine'
    },
    {
        6: 'none',
        8: 'none',
        9: 'none',
        blueLineOwner: 'none',
        id: 'blueLine'
    },
    {
        11: 'none',
        13: 'none',
        14: 'none',
        purpleLineOwner: 'none',
        id: 'purpleLine'
    },
    {
        16: 'none',
        18: 'none',
        19: 'none',
        orangeLineOwner: 'none',
        id: 'orangeLine'
    },
    {
        21: 'none',
        23: 'none',
        24: 'none',
        redLineOwner: 'none',
        id: 'redLine'
    },
    {
        26: 'none',
        27: 'none',
        29: 'none',
        yellowLineOwner: 'none',
        id: 'yellowLine'
    },
    {
        31: 'none',
        32: 'none',
        34: 'none',
        greenLineOwner: 'none',
        id: 'greenLine'
    },
    {
        37: 'none',
        39: 'none',
        darkblueLineOwner: 'none',
        id: 'darkblueLine'
    },
    {
        'Professor Snape': 'none',
        'Neville Longbottom': 'none',
        'Draco Malfoy': 'none',
        'Luna Lovegood': 'none',
        goodAlliesOwner: 'none',
        evilAlliesOwner: 'none',
        id: 'allies'
    },
    {
        'Cloak of Invisibility': 'none',
        'Resurrection Stone': 'none',
        'Elder Wand': 'none',
        deathlyHallowsOwner: 'none',
        id: 'deathlyHallows'
    }
]

export const elementIds = {
    streets: [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39],
    allies: [5, 15, 25, 35],
    deathlyHallows: [12, 28],
    lightMagic: [2, 17, 33],
    darkMagic: [7, 22, 36],
    fines: [4, 38],
    start: 0,
    prison: 10,
    portal: 20,
    welcomeToPrison: 30,
    brownLine: [1, 3],
    blueLine: [6, 8, 9],
    purpleLine: [11, 13, 14],
    orangeLine: [16, 18, 19],
    redLine: [21, 23, 24],
    yellowLine: [26, 27, 29],
    greenLine: [31, 32, 34],
    darkblueLine: [37, 39],
}

export const heroes = {
    goodWizard: {
        HarryPotter: players[0].name,
        HermioneGranger: players[1].name,
        RonWeasley: players[2].name,
        AlbusDumbledore: players[3].name,
    },
    evilWizard: {
        PeterPettigrew: players[4].name,
        LordVoldemort: players[5].name,
        BellatrixLestrange: players[6].name,
        LuciusMalfoy: players[7].name
    }
}

export const cards = {

    positions: [
        'Start',
        'London Zoo',
        'Light Magic',
        'Highgate Cemetery',
        'Stupefy',
        'Professor Snape',
        'Obscurus Books',
        'Dark Magic',
        'Leaky Cauldron',
        'Ollivander wands',
        'Visiting Azkaban',
        'Platform 9 3/4',
        'Cloak of Invisibility',
        'Quidditch Stadium',
        'Enchanted forest',
        'Neville Longbottom',
        'Room of Requirement',
        'Light Magic',
        'Shrieking Shack',
        'Chamber of Secrets',
        'Portal',
        'Three Broomsticks',
        'Dark Magic',
        'Hogsmeade Station',
        'Whomping Willow',
        'Draco Malfoy',
        'Arena with Dragons',
        'Magical Lake',
        'Resurrection Stone',
        'Magic Labyrinth',
        'Welcome to Azkaban',
        'Ministry of Magic',
        'Gringotts Wizarding Bank',
        'Light Magic',
        `St Mungo's Hospital`,
        'Luna Lovegood',
        'Dark Magic',
        `Godric's Hollow`,
        'Expelliarmus',
        'Hogwarts'
    ],

    brownLine: ['London Zoo', 'Highgate Cemetery'],
    blueLine: ['Obscurus Books', 'Leaky Cauldron', 'Ollivander wands'],
    purpleLine: ['Platform 9 3/4', 'Quidditch Stadium', 'Enchanted forest'],
    orangeLine: ['Room of Requirement', 'Shrieking Shack', 'Chamber of Secrets'],
    redLine: ['Three Broomsticks', 'Hogsmeade Station', 'Whomping Willow'],
    yellowLine: ['Arena with Dragons', 'Magical Lake', 'Magic Labyrinth'],
    greenLine: ['Ministry of Magic', 'Gringotts Wizarding Bank', `St Mungo's Hospital`],
    darkblueLine: [`Godric's Hollow`, 'Hogwarts'],

    start: 'Start',

    lightMagic: {
        type: 'Light Magic',
        actions: []
    },

    darkMagic: {
        type: 'Dark Magic',
        actions: []
    },

    fines: { // штрафы
        Stupefy: 200, // остолбеней
        Expelliarmus: 100
    },

    allies: {
        'Professor Snape': false,
        'Neville Longbottom': true,
        'Draco Malfoy': false,
        'Luna Lovegood': true
    },

    deathlyHallows: ['Cloak of Invisibility', 'Resurrection Stone', 'Elder Wand'],

    portal: 'Portal',

    azkaban: ['Visiting Azkaban', 'Welcome to Azkaban'],

    
}