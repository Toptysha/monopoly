import { MainButton, Player } from "@/types"
import { Dispatch, SetStateAction } from "react"
import DbUpdateHeroPosition from "@/utils/db-actions/db-update-hero-position"
import { CurrentHeroIndex } from "../current-hero"

export default function ButtonRollDices(
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    {firstMainButton, setFirstMainButton}: {firstMainButton: MainButton, setFirstMainButton: Dispatch<SetStateAction<MainButton>>},
    {secondMainButton, setSecondMainButton}: {secondMainButton: MainButton, setSecondMainButton: Dispatch<SetStateAction<MainButton>>},
    {dices, setDices}: {dices: number[], setDices: Dispatch<SetStateAction<number[]>>},
    {dbUpdatePositionFlag, setDbUpdatePositionFlag}: {dbUpdatePositionFlag: boolean, setDbUpdatePositionFlag: Dispatch<SetStateAction<boolean>>},
) {

    function rollDice() {
        const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

        // let random1 = random(1, 6)
        // let random2 = random(1, 6)

        let random1 = 4
        let random2 = 5
    
        setDices(() => {

            setHeroesState(() => {
        
                let updateState = heroesState.map((hero, i) => {
                    if (i === CurrentHeroIndex(heroesState)) {
                        return {...hero, rollDice: true}
                    } else return hero
                })
        
                // setDbUpdateCurrentHeroFlag(true)
                return updateState 
            })

            setDbUpdatePositionFlag(true)

            return [random1, random2]
        })
    }

    // 1. обновить стейт дайсов +
    // 2. обновить стейт героя (rollDice: true, position: 'newPosition') +
    // 3. обновить игровое поле +
    // 4. записать новый стейт в базу +
    // 5. показать кнопки с новыми действиями +

    setFirstMainButton({
        click: () => {
            rollDice()
        },
        nameButton: 'Кинуть кости'
    })
    setSecondMainButton({
        click: () => {},
        nameButton: ''
    })
}