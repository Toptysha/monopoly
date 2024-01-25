import { MainButton, Player } from "@/types"
import { Dispatch, SetStateAction } from "react"
import DbUpdateHeroPosition from "@/utils/db-actions/db-update-hero-position"

export default function ButtonRollDices(
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    {firstMainButton, setFirstMainButton}: {firstMainButton: MainButton, setFirstMainButton: Dispatch<SetStateAction<MainButton>>},
    {secondMainButton, setSecondMainButton}: {secondMainButton: MainButton, setSecondMainButton: Dispatch<SetStateAction<MainButton>>},
    {dices, setDices}: {dices: number[], setDices: Dispatch<SetStateAction<number[]>>},
    {dbFieldFlag, setDbFieldFlag}: {dbFieldFlag: boolean, setDbFieldFlag: Dispatch<SetStateAction<boolean>>},
    {dbPositionUpdateFlag, setDbPositionUpdateFlag}: {dbPositionUpdateFlag: boolean, setDbPositionUpdateFlag: Dispatch<SetStateAction<boolean>>},
    {dbUpdateCurrentHeroFlag, setDbUpdateCurrentHeroFlag}: {dbUpdateCurrentHeroFlag: boolean, setDbUpdateCurrentHeroFlag: Dispatch<SetStateAction<boolean>>}
) {

    function rollDice() {
        const random = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

        let random1 = random(1, 6)
        let random2 = random(1, 6)
    
        setDices([random1, random2])

        DbUpdateHeroPosition([random1, random2], {heroesState, setHeroesState}, setDbUpdateCurrentHeroFlag)
        setDbFieldFlag(true)
    }

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