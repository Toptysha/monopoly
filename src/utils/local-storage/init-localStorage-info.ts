import { HEROES, OWNERS } from '@/utils/local-storage/local-storage-keys';
// import PlayerPoint from '../classes/player-point';
import { owners, players } from '@/start-info';
import { Player } from '@/types';

// export default function InitLocalStorageInfo (initHeroes: string[]) {

//     localStorage.setItem(HEROES, JSON.stringify(initHeroes))

//     // const allHeroes = {
//     //     HarryPotter: players['Harry Potter'],
//     //     HermioneGranger: players['Hermione Granger'],
//     //     RonWeasley: players['Ron Weasley'],
//     //     AlbusDumbledore: players['Albus Dumbledore'],
//     //     PeterPettigrew: players['Peter Pettigrew'],
//     //     LordVoldemort: players['Lord Voldemort'],
//     //     BellatrixLestrange: players['Bellatrix Lestrange'],
//     //     LuciusMalfoy: players['Lucius Malfoy']
//     // }

//     // const heroesFromLocalStorage = initHeroes

//     let heroesInGame: Player[] = initHeroes.map((personInGame: string) => {
//         let e: any
//         Object.entries(players).forEach((hero: any) => {
//             if (personInGame === hero[1].name) {
//                 e = hero[1]
//             }
//         })
//         return e
//     })

//     heroesInGame[0].isCurrentHero = true
//     heroesInGame.forEach((e: Player) => {
//         localStorage.setItem(`${e.name}`, JSON.stringify(e))
//     })

//     localStorage.setItem(OWNERS, JSON.stringify(owners))

// }
