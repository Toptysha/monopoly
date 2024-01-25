// // import PlayerPoint from "../classes/player-point";
// import { Player } from "@/types";
// import { playersEndpoint } from "../db-actions/db-endpoints";
// // import { HEROES } from "../local-storage/local-storage-keys";

// export default function UpdateHeroesState():Player[] {

//     let heroes: Player[] = []

//     fetch(`${playersEndpoint}`)
//         .then((rawResponse) => rawResponse.json())
//         .then((response) => {
//             console.log(response)
//             heroes = response
//         })

//         return heroes
    

//     // return JSON.parse(localStorage.getItem(HEROES) || '')
//     //     .map((e: string) => JSON.parse(localStorage.getItem(e) || ''))
// }