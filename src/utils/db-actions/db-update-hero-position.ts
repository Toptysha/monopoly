import { Dispatch, SetStateAction } from "react";
import { CurrentHeroIndex } from "../components/current-hero";
import { Player } from "@/types";

export default function DbUpdateHeroPosition(
    dices: number[],
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    setDbUpdateCurrentHeroFlag: Dispatch<SetStateAction<boolean>>
) {

    setHeroesState(() => {
        
        let updateState = heroesState.map((hero, i) => {
            if (i === CurrentHeroIndex(heroesState)) {
                if (hero.position + dices[0] + dices[1] < 40) {
                    return {...hero, rollDice: true, position: hero.position + dices[0] + dices[1]}
                } else {
                    return {...hero, rollDice: true, position: hero.position + dices[0] + dices[1] -40}
                }
            } else return hero
        })

        setDbUpdateCurrentHeroFlag(true)
        return updateState 
    })
}
