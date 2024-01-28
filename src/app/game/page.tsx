"use client"

import styles from '@/styles/playing_field.module.css'
import { cards } from '@/start-info'
import Image from 'next/image';
import shackles from '@/img/shackles.png'
import { useEffect, useState } from 'react';
import { MainButton, Player } from '@/types';
import { CourseOptions } from '@/utils/components/course-options';
import MiddleSquareBlock from '@/utils/components/middle-square-block';
import ChipPlayerUpdate from '@/utils/components/gaming-chips/chip-player-update';
import DbUpdateHeroPosition from '@/utils/db-actions/db-update-hero-position';
import DbInitHeroesAndOwnersState from '@/utils/db-actions/db-init-heroes-and-owners-state';
import NextCurrentHero from '@/utils/components/next-current-hero';
import DbUpdateAllHeros from '@/utils/db-actions/db-update-all-heros';
import DbUpdateOwners from '@/utils/db-actions/db-update-owners';



function PlayingField() {

    const [heroesState, setHeroesState] = useState<Player[]>([])
    const [ownersState, setOwnersState] = useState<any[]>([])

    const [dices, setDices] = useState([0, 0])

    const [firstMainButton, setFirstMainButton] = useState<MainButton>({click: () => {}, nameButton: ''})
    const [secondMainButton, setSecondMainButton] = useState<MainButton>({click: () => {}, nameButton: ''})

    const [dbUpdatePositionFlag, setDbUpdatePositionFlag] = useState(false)
    const [dbUpdateHerosFlag, setDbUpdateHerosFlag] = useState(false)
    const [courseOptionsFlag, setCourseOptionsFlag] = useState(false)
    const [nextCurrentHeroFlag, setNextCurrentHeroFlag] = useState(false)
    const [dbUpdateOwnersFlag, setDbUpdateOwnersFlag] = useState(false)

    useEffect(() => {
        DbInitHeroesAndOwnersState(setHeroesState, setOwnersState, setDbUpdatePositionFlag)
    }, [])

    // useEffect(() => {
    //     console.log(dices)
    // })

    useEffect(() => {
        ChipPlayerUpdate(heroesState)
    }, [heroesState])

    useEffect(() => {    
        if (dbUpdatePositionFlag) {
            DbUpdateHeroPosition({dices, setDices}, {heroesState, setHeroesState}, setDbUpdateHerosFlag)
            setCourseOptionsFlag(true)
            setDbUpdatePositionFlag(false)
        }
    }, [dbUpdatePositionFlag])



    useEffect(() => { // запись нового heroesState в БД
        if (dbUpdateHerosFlag) {
            DbUpdateAllHeros(heroesState)
            setDbUpdateHerosFlag(false)
        }    
    }, [dbUpdateHerosFlag])

    useEffect(() => { // запись нового владельца в БД
        if (dbUpdateOwnersFlag) {
            DbUpdateOwners(ownersState)
            setDbUpdateOwnersFlag(false)
        }    
    }, [dbUpdateOwnersFlag])

    useEffect(() => {
        // console.log(heroesState)
        if (courseOptionsFlag) {
            CourseOptions(
                {heroesState, setHeroesState}, 
                {ownersState, setOwnersState}, 
                {firstMainButton, setFirstMainButton}, 
                {secondMainButton, setSecondMainButton}, 
                {dices, setDices},
                {dbUpdatePositionFlag, setDbUpdatePositionFlag},
                // {dbPositionUpdateFlag, setDbPositionUpdateFlag},
                {dbUpdateHerosFlag, setDbUpdateHerosFlag},
                {courseOptionsFlag, setCourseOptionsFlag},
                {nextCurrentHeroFlag, setNextCurrentHeroFlag},
                {dbUpdateOwnersFlag, setDbUpdateOwnersFlag}
            )
            setCourseOptionsFlag(false)
        }    
    }, [courseOptionsFlag])

    useEffect(() => {
        if (nextCurrentHeroFlag) {
            NextCurrentHero(
                {heroesState, setHeroesState}, 
                {dbUpdatePositionFlag, setDbUpdatePositionFlag}, 
                {dbUpdateHerosFlag, setDbUpdateHerosFlag},
                {courseOptionsFlag, setCourseOptionsFlag}
            )
            setNextCurrentHeroFlag(false)
        }    
    }, [nextCurrentHeroFlag])

    return (
      <div className={styles.playingField}>
        <div className={styles.topLine}>
            <div className={`${styles.start} ${styles.forCentering}`} id={styles.elem0} data-elem='elem0'><h2>{cards.positions[0]}</h2></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem1} data-elem='elem1'><h3>{cards.positions[1]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem2} data-elem='elem2'><h3>{cards.positions[2]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem3} data-elem='elem3'><h3>{cards.positions[3]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem4} data-elem='elem4'><h3>{cards.positions[4]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem5} data-elem='elem5'><h3>{cards.positions[5]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem6} data-elem='elem6'><h3>{cards.positions[6]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem7} data-elem='elem7'><h3>{cards.positions[7]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem8} data-elem='elem8'><h3>{cards.positions[8]}</h3></div>
            <div className={`${styles.topLineElem} ${styles.forCentering}`} id={styles.elem9} data-elem='elem9'><h3>{cards.positions[9]}</h3></div>
            <div className={`${styles.justVisiting} ${styles.forCentering}`} id={styles.elem10} data-elem='elem10'>
            <div id={styles.shacklesDiv}><Image priority id={styles.shackles} src={shackles} alt='shackles'/></div>
                <div className={styles.bottomTriangle}></div>
            </div>  
        </div>
        <div className={styles.middleBlock}>
            <div className={styles.leftLine}>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem39} data-elem='elem39'><h3>{cards.positions[39]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem38} data-elem='elem38'><h3>{cards.positions[38]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem37} data-elem='elem37'><h3>{cards.positions[37]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem36} data-elem='elem36'><h3>{cards.positions[36]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem35} data-elem='elem35'><h3>{cards.positions[35]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem34} data-elem='elem34'><h3>{cards.positions[34]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem33} data-elem='elem33'><h3>{cards.positions[33]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem32} data-elem='elem32'><h3>{cards.positions[32]}</h3></div>
                <div className={`${styles.leftLineElem} ${styles.forCentering}`} id={styles.elem31} data-elem='elem31'><h3>{cards.positions[31]}</h3></div>
            </div>
            <div className={styles.middleSquare}>
                <MiddleSquareBlock
                    heroesState={heroesState}
                    setHeroesState={setHeroesState}
                    firstMainButton={firstMainButton}
                    setFirstMainButton={setFirstMainButton}
                    secondMainButton={secondMainButton}
                    setSecondMainButton={setSecondMainButton}
                    dices={dices} 
                    setDices={setDices}
                /> 
            </div>
            <div className={styles.rightLine}>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem11} data-elem='elem11'><h3>{cards.positions[11]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem12} data-elem='elem12'><h3>{cards.positions[12]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem13} data-elem='elem13'><h3>{cards.positions[13]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem14} data-elem='elem14'><h3>{cards.positions[14]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem15} data-elem='elem15'><h3>{cards.positions[15]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem16} data-elem='elem16'><h3>{cards.positions[16]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem17} data-elem='elem17'><h3>{cards.positions[17]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem18} data-elem='elem18'><h3>{cards.positions[18]}</h3></div>
                <div className={`${styles.rightLineElem} ${styles.forCentering}`} id={styles.elem19} data-elem='elem19'><h3>{cards.positions[19]}</h3></div>
            </div>
        </div>
        <div className={styles.bottomLine}>
            <div className={`${styles.toTheJail} ${styles.forCentering}`} id={styles.elem30} data-elem='elem30'><h3>{cards.positions[30]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem29} data-elem='elem29'><h3>{cards.positions[29]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem28} data-elem='elem28'><h3>{cards.positions[28]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem27} data-elem='elem27'><h3>{cards.positions[27]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem26} data-elem='elem26'><h3>{cards.positions[26]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem25} data-elem='elem25'><h3>{cards.positions[25]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem24} data-elem='elem24'><h3>{cards.positions[24]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem23} data-elem='elem23'><h3>{cards.positions[23]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem22} data-elem='elem22'><h3>{cards.positions[22]}</h3></div>
            <div className={`${styles.bottomLineElem} ${styles.forCentering}`} id={styles.elem21} data-elem='elem21'><h3>{cards.positions[21]}</h3></div>
            <div className={`${styles.freeParking} ${styles.forCentering}`} id={styles.elem20} data-elem='elem20'><h3>{cards.positions[20]}</h3></div>
        </div>
      </div>
    );
  }
  
  export default PlayingField;