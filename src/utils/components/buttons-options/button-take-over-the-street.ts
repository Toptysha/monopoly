import { MainButton, Player } from "@/types"
import { OWNERS } from "@/utils/local-storage/local-storage-keys"
import { Dispatch, SetStateAction } from "react"
import NextCurrentHero from "../next-current-hero"

export default function ButtonTakeOverTheStreet(currentHero: Player, {firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton}: {
    firstMainButton: MainButton,
    setFirstMainButton: Dispatch<SetStateAction<MainButton>>,
    secondMainButton: MainButton, 
    setSecondMainButton: Dispatch<SetStateAction<MainButton>>,
    }) 
{

    let owners = JSON.parse(localStorage.getItem(OWNERS) || '')

    setFirstMainButton({
        click: () => {
            console.log(`улица захвачена ${owners[currentHero.position]}`)
            if (!currentHero.ownerOf.includes(currentHero.position.toString())) {
                currentHero.ownerOf.push(currentHero.position.toString())
            }

            owners = {...owners, [currentHero.position]: currentHero.name}

            localStorage.setItem(currentHero.name, JSON.stringify(currentHero))
            localStorage.setItem(OWNERS, JSON.stringify(owners))
            NextCurrentHero()
        },
        nameButton: 'Захватить улицу'
    })
    setSecondMainButton({
        click: () => {
            console.log(`улица НЕ захвачена ${currentHero.name}`)
        },
        nameButton: 'Уступить улицу'
    })
}