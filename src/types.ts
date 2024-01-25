export interface MainButton {
      click: () => void,
      nameButton: string
}

export interface Player {
      isCurrentHero: boolean
      name: string
      id: string
      position: number
      color: string
      side: boolean
      budget: number
      ownerOf: string[]
      inPrison: boolean
      rollDice: boolean
}

// export interface Owners {
//       1: string,
//       3: string,
//       brownLineOwner: string,
//       6: string,
//       8: string,
//       9: string,
//       blueLineOwner: string,
//       11: string,
//       13: string,
//       14: string,
//       purpleLineOwner: string,
//       16: string,
//       18: string,
//       19: string,
//       orangeLineOwner: string,
//       21: string,
//       23: string,
//       24: string,
//       redLineOwner: string,
//       26: string,
//       27: string,
//       29: string,
//       yellowLineOwner: string,
//       31: string,
//       32: string,
//       34: string,
//       greenLineOwner: string,
//       37: string,
//       39: string,
//       darkblueLineOwner: string,
  
//       allies: {
//           'Professor Snape': string,
//           'Neville Longbottom': string,
//           'Draco Malfoy': string,
//           'Luna Lovegood': string
//       },
  
//       deathlyHallows: {
//             'Cloak of Invisibility': string,
//             'Resurrection Stone': string,
//             'Elder Wand': string
//       }
// }
