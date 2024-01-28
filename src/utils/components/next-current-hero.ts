import { Player } from "@/types";
import { CurrentHeroIndex } from "./current-hero";
import { Dispatch, SetStateAction } from "react";

export default function NextCurrentHero(
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    {dbUpdatePositionFlag, setDbUpdatePositionFlag}: {dbUpdatePositionFlag: boolean, setDbUpdatePositionFlag: Dispatch<SetStateAction<boolean>>},
    {dbUpdateHerosFlag, setDbUpdateHerosFlag}: {dbUpdateHerosFlag: boolean, setDbUpdateHerosFlag: Dispatch<SetStateAction<boolean>>},
    {courseOptionsFlag, setCourseOptionsFlag}: {courseOptionsFlag: boolean, setCourseOptionsFlag: Dispatch<SetStateAction<boolean>>},
    heroInQueue = 0 // героев в очереди
) {

    if (heroInQueue === 0) {

        let nextCurrentHeroIndex = CurrentHeroIndex(heroesState) + 1
        if (nextCurrentHeroIndex === heroesState.length) {
            nextCurrentHeroIndex = 0
        }
    
        setHeroesState(() => {
        
            let updateState = heroesState.map((hero, i) => {
                if (i === CurrentHeroIndex(heroesState)) {
                    return {...hero, rollDice: false, isCurrentHero: false}
                } else if (i === nextCurrentHeroIndex) {
                    return {...hero, isCurrentHero: true}
                } else return hero
            })
    
            setDbUpdateHerosFlag(true)
            setCourseOptionsFlag(true)
            return updateState 
        })

    } else {
        // функция для передачи очереди по кругу (на аукционе)
    }   
}