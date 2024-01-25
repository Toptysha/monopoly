import styles from '@/styles/playing_field.module.css'
import { Player } from '@/types'
import ChipHeroCreate from './chip-hero-create'
import ChipsClear from './chips-clear'
import ChipCurrentHero from './chip-current-hero'

export default function ChipPlayerUpdate(heroesState: Player[]) { 

    ChipsClear()

    let exceptions: number[] = []

    heroesState.forEach((hero, indexHero) => {  
        let chipParent = document.querySelector(`[data-elem*="elem${hero.position}"]`)
        chipParent?.classList.remove(styles.forCentering)
        chipParent?.classList.add(styles.visiting)

        for (let i = 0; i < 40; i++) {
            if ((hero.position === i) && (!exceptions.includes(hero.position)) && (heroesState.length <= 2)) {
                exceptions.push(i)

                const chipContainer1 = document.createElement('div')
                chipContainer1.className = styles.chipContainer1
                chipParent?.append(chipContainer1)

                ChipHeroCreate(indexHero, heroesState)

            } else if ((hero.position === i) && (!exceptions.includes(hero.position)) && (heroesState.length >= 2)) {
                exceptions.push(i)

                const chipContainer1 = document.createElement('div')
                chipContainer1.className = styles.chipContainer1
                chipParent?.append(chipContainer1)

                const chipContainer2 = document.createElement('div')
                chipContainer2.className = styles.chipContainer2
                chipParent?.append(chipContainer2)

                ChipHeroCreate(indexHero, heroesState)
            } else if ((hero.position === i) && (exceptions.includes(hero.position))) {

                ChipHeroCreate(indexHero, heroesState)
            }
        }    
    })

    ChipCurrentHero(heroesState)
}