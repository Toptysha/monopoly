import styles from '@/styles/playing_field.module.css'
import { Player } from "@/types"
import { CurrentHeroIndex } from '../current-hero'

export default function ChipCurrentHero(heroesState: Player[]) {

    let players: NodeListOf<Element> = document.querySelectorAll(`.${styles.chip}`)

    players.forEach((e: any) => {
        if (e.dataset.name === heroesState[CurrentHeroIndex(heroesState)].name) {
            e.style.border = 'none'
            e.style.boxShadow = '0px 0px 3px 3px rgb(255, 86, 86)'
            e.style.animation = 'flicker 2s infinite alternate'
        } else {
            e.style.border = '1px solid rgb(134, 134, 134)'
            e.style.boxShadow = 'none'
            e.style.animation = 'none'
        }
    })
}