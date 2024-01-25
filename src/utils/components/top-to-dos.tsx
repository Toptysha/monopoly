import styles from '@/styles/top_menu.module.css'
import { MainButton, Player } from '@/types';
import { Dispatch, SetStateAction } from 'react';
import { CurrentHeroIndex } from './current-hero';

export default function TopToDos({heroesState, firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton}: {
    heroesState: Player[],
    firstMainButton: MainButton, 
    setFirstMainButton: Dispatch<SetStateAction<MainButton>>,
    secondMainButton: MainButton, 
    setSecondMainButton: Dispatch<SetStateAction<MainButton>>,
    }) 
{
    let whoseMove = `Ходит: ${heroesState[CurrentHeroIndex(heroesState)]?.name || ''}`

    if (firstMainButton.nameButton === '') {
        return (
            <>
                <div className={styles.whoseMove}>{whoseMove}</div>
            </>
        )
    } else if (secondMainButton.nameButton === '') {
        return (
            <>
                <div className={styles.whoseMove}>{whoseMove}</div>
                <div className={styles.toDosBlock}>    
                    <button className={styles.mainButton} key={firstMainButton.nameButton} onClick={firstMainButton.click} >{firstMainButton.nameButton}</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={styles.whoseMove}>{whoseMove}</div>
                <div className={styles.toDosBlock}>
                    <button className={styles.mainButton} key={firstMainButton.nameButton} onClick={firstMainButton.click} >{firstMainButton.nameButton}</button>
                    <button className={styles.mainButton} key={secondMainButton.nameButton} onClick={secondMainButton.click} >{secondMainButton.nameButton}</button>
                </div>
            </>
        )
    }
}