import styles from '@/styles/playing_field.module.css'

export default function ChipsClear() {
    let visiting = document.querySelectorAll(`.${styles.visiting}`)
    
    visiting.forEach((elem: any, i: any) => {

        let chipContainer1 = document.querySelector(`.${styles.chipContainer1}`)
        let chipContainer2 = document.querySelector(`.${styles.chipContainer2}`)

        if (chipContainer1) {
            chipContainer1.remove()
        }
        if (chipContainer2) {
            chipContainer2.remove()
        }

        // elem.innerHTML = ''
        elem.classList.remove(styles.visiting)
        elem.classList.add(styles.forCentering)
    })
}