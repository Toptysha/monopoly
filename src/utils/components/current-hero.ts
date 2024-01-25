import { Player } from '@/types'

export function CurrentHero(heroesState: Player[]): Player {
    return heroesState.filter(e => e.isCurrentHero === true)[0]
}

export function CurrentHeroIndex(heroesState: Player[]) {
    return heroesState.indexOf(CurrentHero(heroesState))
}