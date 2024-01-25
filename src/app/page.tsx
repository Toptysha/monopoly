"use client"

import { MouseEvent, useEffect, useRef, useState} from 'react'
import ChooseHeroes from '@/utils/components/choose-heroes';
import { players } from '@/start-info';
import DbInit from '@/utils/db-actions/db-init';
import DbClear from '@/utils/db-actions/db-clear';

function StartNewGame() {

    let goodWizardCount = useRef<Partial<number>>(0)
    let evilWizardCount = useRef<Partial<number>>(0)
    let selectedHeroes = useRef([])

    const [dbClearFlag, setDbClearFlag] = useState(false)
    const [dbInitFlag, setDbInitFlag] = useState(false)

    useEffect(() => {
        if (dbClearFlag) {
            DbInit(selectedHeroes.current, setDbInitFlag)
        }
    }, [dbClearFlag])

    useEffect(() => {
        if (dbInitFlag) {
            location.href = '/game'
        }
    }, [dbInitFlag])

    const start = () => {
        if (selectedHeroes.current.length < 2) {
            alert('Игроков должно быть не меньше 2-ух и не больше 4-ех!')
        } else {
            DbClear(setDbClearFlag)
        }   
    }

  return (
      <div className="StartNewGame">
          <div className="requestForNumberOfPlayers">
              <h3>Выберите игроков</h3>
              <div 
                className="numberOfPlayersButtons" 
                onClick={(e: MouseEvent<HTMLDivElement>) => ChooseHeroes(e, goodWizardCount, evilWizardCount, selectedHeroes)}
              >
                  <div className="goodWizard">
                      <div className="selectSideHeroes">Силы света:</div>
                      <button className="selectHeroButton">{players[0].name}</button>
                      <button className="selectHeroButton">{players[1].name}</button>
                      <button className="selectHeroButton">{players[2].name}</button>
                      <button className="selectHeroButton">{players[3].name}</button>
                  </div>
                  <div className="evilWizard">
                      <div className="selectSideHeroes">Силы тьмы:</div>
                      <button className="selectHeroButton">{players[4].name}</button>
                      <button className="selectHeroButton">{players[5].name}</button>
                      <button className="selectHeroButton">{players[6].name}</button>
                      <button className="selectHeroButton">{players[7].name}</button>
                  </div>
              </div>
              <button type='submit' className="startGameButton" onClick={start}>Начать игру!</button>
          </div>     
      </div>
  )
}

export default StartNewGame