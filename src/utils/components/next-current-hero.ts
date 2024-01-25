import { Player } from "@/types";
import { CurrentHeroIndex } from "./current-hero";
import { Dispatch, SetStateAction } from "react";
import UpdateLocalStorageCurrentHero from "../local-storage/update-localStorage-current-hero";

export default function NextCurrentHero({heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>}) {

    let nextCurrentHeroIndex = CurrentHeroIndex(heroesState) + 1

    if (nextCurrentHeroIndex === heroesState.length) {
        nextCurrentHeroIndex = 0
    }

    setHeroesState((prev: any) => 
            prev.map((hero: any) => {
                if (hero === heroesState[CurrentHeroIndex(heroesState)]) {
                    hero = {...hero, isCurrentHero: false}
                } else if (hero === heroesState[nextCurrentHeroIndex]) {
                    hero = {...hero, isCurrentHero: true}
                }
            })
        )

    UpdateLocalStorageCurrentHero(heroesState)
    localStorage.setItem(heroesState[nextCurrentHeroIndex].name, JSON.stringify(heroesState[nextCurrentHeroIndex]))
    
}