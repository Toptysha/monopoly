import { Dispatch, SetStateAction } from "react";
import { CurrentHeroIndex } from "../components/current-hero";
import { Player } from "@/types";

export default function DbUpdateHeroPosition(
    {dices, setDices}: {dices: number[], setDices: Dispatch<SetStateAction<number[]>>},
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    setDbUpdateCurrentHeroFlag: Dispatch<SetStateAction<boolean>>
) {

    setHeroesState(() => {
        
        let updateState = heroesState.map((hero, i) => {
            if (i === CurrentHeroIndex(heroesState)) {
                if (hero.position + dices[0] + dices[1] < 40) {
                    return {...hero, position: hero.position + dices[0] + dices[1]}
                } else {
                    return {...hero, position: hero.position + dices[0] + dices[1] - 40}
                }
            } else return hero
        })

        setDbUpdateCurrentHeroFlag(true)
        return updateState 
    })
}
