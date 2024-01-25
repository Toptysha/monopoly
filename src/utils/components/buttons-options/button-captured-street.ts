import { MainButton, Player } from "@/types"
import { OWNERS } from "@/utils/local-storage/local-storage-keys"
import { Dispatch, SetStateAction } from "react"
import NextCurrentHero from "../next-current-hero"
import ButtonRollDices from "./button-roll-dices"

export default function ButtonCapturedStreet(currentHero: Player, {firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton, dices, setDices}: {
    firstMainButton: MainButton,
    setFirstMainButton: Dispatch<SetStateAction<MainButton>>,
    secondMainButton: MainButton, 
    setSecondMainButton: Dispatch<SetStateAction<MainButton>>,
    dices: number[], 
    setDices: Dispatch<SetStateAction<number[]>>
    }) 
{

    let owners = JSON.parse(localStorage.getItem(OWNERS) || '')

    let ownerName = `${owners[currentHero.position]}`

    if ((ownerName === currentHero.name) && currentHero.rollDice) {
        NextCurrentHero()
    } else if ((ownerName === currentHero.name) && !currentHero.rollDice) {
        ButtonRollDices({firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton, dices, setDices})
    } else {
        setFirstMainButton({
            click: () => {
    
            },
            nameButton: `BAD, ${ownerName}`
        })
        setSecondMainButton({
            click: () => {},
            nameButton: ''
        })
    }
}