import styles from '@/styles/dices.module.css'

export default function CreateDices({dices}: {dices: number[]}) {
    if (dices[0] === 0) {
        return (
            <></>
        )
    } else {
        return (
            <div  className={styles.dicesBlock}>
                <div className={styles.dice0}>{dices[0]}</div>
                <div className={styles.dice1}>{dices[1]}</div>
            </div>
        )
    }
}
