import styles from '@/styles/playing_field.module.css'
import { Player } from '@/types'

export default function ChipHeroCreate(index: number, heroesState: Player[]) {

    let chipContainer: Element | null = null

    if (index < 2) {
        chipContainer = document.querySelector(`.${styles.chipContainer1}`)
    } else {
        chipContainer = document.querySelector(`.${styles.chipContainer2}`)
    }
    

    const chip = document.createElement('div')
    chip.classList.add(styles.chip, `elem${heroesState[index].position}`)
    chip.dataset.name = heroesState[index].name
    chip.style.backgroundColor = heroesState[index].color
    chipContainer?.append(chip)
}