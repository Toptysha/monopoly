// import { Dispatch, SetStateAction } from "react";
// // import PlayerPoint from "../classes/player-point";
// import { CurrentHeroIndex } from "../components/current-hero";
// import UpdateLocalStorageCurrentHero from "./update-localStorage-current-hero";
// import { Player } from "@/types";

// export default function UpdatePersonPosition(diceCount: number, {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>}) {

//     setHeroesState((prev: any) => 
//         prev.map((hero: any) => {
//             if (hero === heroesState[CurrentHeroIndex(heroesState)]) {
//                 if (heroesState[CurrentHeroIndex(heroesState)].position + diceCount < 40) {
//                     hero = {...hero, position: heroesState[CurrentHeroIndex(heroesState)].position + diceCount}
//                 } else {
//                     hero = {...hero, position: heroesState[CurrentHeroIndex(heroesState)].position + diceCount - 40}
//                 }
//             }
//         })
//     )

//     UpdateLocalStorageCurrentHero(heroesState)
// }