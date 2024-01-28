import { MainButton, Player } from "@/types"
import { Dispatch, SetStateAction } from "react"
import { CurrentHeroIndex } from "../current-hero"
import { cards } from "@/start-info"

export default function ButtonTakeOverTheStreet(
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    {ownersState, setOwnersState}: {ownersState: any[], setOwnersState: Dispatch<SetStateAction<any[]>>},
    {firstMainButton, setFirstMainButton}: {firstMainButton: MainButton, setFirstMainButton: Dispatch<SetStateAction<MainButton>>}, 
    {secondMainButton, setSecondMainButton}: {secondMainButton: MainButton, setSecondMainButton: Dispatch<SetStateAction<MainButton>>},
    {dbUpdateHerosFlag, setDbUpdateHerosFlag}: {dbUpdateHerosFlag: boolean, setDbUpdateHerosFlag: Dispatch<SetStateAction<boolean>>},
    {nextCurrentHeroFlag, setNextCurrentHeroFlag}: {nextCurrentHeroFlag: boolean, setNextCurrentHeroFlag: Dispatch<SetStateAction<boolean>>},
    {courseOptionsFlag, setCourseOptionsFlag}: {courseOptionsFlag: boolean, setCourseOptionsFlag: Dispatch<SetStateAction<boolean>>},
    {dbUpdateOwnersFlag, setDbUpdateOwnersFlag}: {dbUpdateOwnersFlag: boolean, setDbUpdateOwnersFlag: Dispatch<SetStateAction<boolean>>}
) {

    function buyStreet() {
        console.log(`улица ${cards.positions[heroesState[CurrentHeroIndex(heroesState)].position]} захвачена`)

        setHeroesState(() => {
        
            let updateState = heroesState.map((hero, i) => {
                if (i === CurrentHeroIndex(heroesState)) {
                    return {...hero, ownerOf: [...hero.ownerOf, cards.positions[heroesState[CurrentHeroIndex(heroesState)].position]]}
                } else return hero
            })

            setNextCurrentHeroFlag(true)

            return updateState 
        })

        setOwnersState(() => {

            let updateState = ownersState.map(fullStreet => {
                return Object.fromEntries(Object.entries(fullStreet).map(street => {
                    if (Number(street[0]) === heroesState[CurrentHeroIndex(heroesState)].position) {
                        return [street[0], heroesState[CurrentHeroIndex(heroesState)].name]
                    }  else {
                        return street
                    }    
                }))
            })

            setDbUpdateOwnersFlag(true)

            return updateState
        })

        // 1. добавляем в стейт ГГ новую улицу +
        // 1.1 добавляем в стейт овнерс нового владельца +
        // 2. меняем ГГ +
        // 3. обновляем БД героев +
        // 3.1 обновляем БД овнерс +
        // 4. Запускам курс опций +
    }

    

    function skipStreet () {

    }

    setFirstMainButton({
        click: () => {
            buyStreet()
        },
        nameButton: 'Захватить улицу'
    })
    setSecondMainButton({
        click: () => {
            skipStreet()
            console.log(`улица НЕ захвачена ${heroesState[CurrentHeroIndex(heroesState)].name}`)
        },
        nameButton: 'Уступить улицу'
    })
}