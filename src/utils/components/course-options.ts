import { MainButton, Player } from "@/types";
import { CurrentHeroIndex } from "./current-hero";
import { elementIds } from '@/start-info'
import { Dispatch, SetStateAction } from "react";
import ButtonRollDices from "./buttons-options/button-roll-dices";
import ButtonCapturedStreet from "./buttons-options/button-captured-street";
import ButtonTakeOverTheStreet from "./buttons-options/button-take-over-the-street";

export function CourseOptions(
    {heroesState, setHeroesState}: {heroesState: Player[], setHeroesState: Dispatch<SetStateAction<Player[]>>},
    {ownersState, setOwnersState}: {ownersState: any[], setOwnersState: Dispatch<SetStateAction<any[]>>},
    {firstMainButton, setFirstMainButton}: {firstMainButton: MainButton, setFirstMainButton: Dispatch<SetStateAction<MainButton>>},
    {secondMainButton, setSecondMainButton}: {secondMainButton: MainButton, setSecondMainButton: Dispatch<SetStateAction<MainButton>>},
    {dices, setDices}: {dices: number[], setDices: Dispatch<SetStateAction<number[]>>},
    {dbUpdatePositionFlag, setDbUpdatePositionFlag}: {dbUpdatePositionFlag: boolean, setDbUpdatePositionFlag: Dispatch<SetStateAction<boolean>>},
    {dbUpdateHerosFlag, setDbUpdateHerosFlag}: {dbUpdateHerosFlag: boolean, setDbUpdateHerosFlag: Dispatch<SetStateAction<boolean>>},
    {courseOptionsFlag, setCourseOptionsFlag}: {courseOptionsFlag: boolean, setCourseOptionsFlag: Dispatch<SetStateAction<boolean>>},
    {nextCurrentHeroFlag, setNextCurrentHeroFlag}: {nextCurrentHeroFlag: boolean, setNextCurrentHeroFlag: Dispatch<SetStateAction<boolean>>},
    {dbUpdateOwnersFlag, setDbUpdateOwnersFlag}: {dbUpdateOwnersFlag: boolean, setDbUpdateOwnersFlag: Dispatch<SetStateAction<boolean>>}
) {

    if (elementIds.streets.includes(heroesState[CurrentHeroIndex(heroesState)]?.position)) {  // если персонаж попал на одну из улиц
        console.log('street')

        let currentElement: any

        ownersState.forEach(elem => {
            Object.entries(elem).forEach(e => {
                if (Number(e[0]) === heroesState[CurrentHeroIndex(heroesState)].position) {
                    currentElement = e[1]
                }    
            })
        })

        console.log(ownersState)

        if (currentElement === 'none' && heroesState[CurrentHeroIndex(heroesState)].rollDice) { // герой пришел на улицу и она никому не принадлежит
            console.log('1 Point')
            ButtonTakeOverTheStreet(
                {heroesState, setHeroesState}, 
                {ownersState, setOwnersState},
                {firstMainButton, setFirstMainButton}, 
                {secondMainButton, setSecondMainButton}, 
                {dbUpdateHerosFlag, setDbUpdateHerosFlag},
                {nextCurrentHeroFlag, setNextCurrentHeroFlag},
                {courseOptionsFlag, setCourseOptionsFlag},
                {dbUpdateOwnersFlag, setDbUpdateOwnersFlag}
            )
        } else if (currentElement === heroesState[CurrentHeroIndex(heroesState)].name && heroesState[CurrentHeroIndex(heroesState)].rollDice) { // герой пришел на свою улицу
            console.log(`${heroesState[CurrentHeroIndex(heroesState)].name} на подконтрольной улице`)
        } else if (currentElement !== heroesState[CurrentHeroIndex(heroesState)].name && heroesState[CurrentHeroIndex(heroesState)].rollDice){  // герой пришел на чужую улицу
            console.log(`${heroesState[CurrentHeroIndex(heroesState)].name} на улице, которую контролирует ${currentElement}`)
        }else if (!heroesState[CurrentHeroIndex(heroesState)].rollDice) { // герой стоит на улице и готовится бросить кубики
            ButtonRollDices(
                {heroesState, setHeroesState}, 
                {firstMainButton, setFirstMainButton}, 
                {secondMainButton, setSecondMainButton}, 
                {dices, setDices}, 
                {dbUpdatePositionFlag, setDbUpdatePositionFlag}
            )
        }

        // if (ownersState[heroesState[CurrentHeroIndex(heroesState)].position] === 'none') { // если улица никому не принадлежит
        
        // }
        //     ButtonTakeOverTheStreet(heroesState[CurrentHeroIndex(heroesState)], {firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton})
        // } else {
        //     ButtonCapturedStreet(heroesState[CurrentHeroIndex(heroesState)], {firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton, dices, setDices})
        // }

        // console.log(owners[heroesState[CurrentHeroIndex(heroesState)].position])
        // console.log(Object.keys(owners))

        // if (elementIds.brownLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('brownLine')
        // } else if (elementIds.blueLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('blueLine')
        // } else if (elementIds.purpleLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('purpleLine')
        // } else if (elementIds.orangeLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('orangeLine')
        // } else if (elementIds.redLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('redLine')
        // } else if (elementIds.yellowLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('yellowLine')
        // } else if (elementIds.greenLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('greenLine')
        // } else if (elementIds.darkblueLine.includes(heroesState[CurrentHeroIndex(heroesState)].position)) {
        //     console.log('darkblueLine')
        // }

    } else if (elementIds.allies.includes(heroesState[CurrentHeroIndex(heroesState)]?.position)) {
        console.log('allies')

    } else if (elementIds.deathlyHallows.includes(heroesState[CurrentHeroIndex(heroesState)]?.position)) {
        console.log('deathlyHallows')

    } else if (elementIds.lightMagic.includes(heroesState[CurrentHeroIndex(heroesState)]?.position)) {
        console.log('lightMagic')

    } else if (elementIds.darkMagic.includes(heroesState[CurrentHeroIndex(heroesState)]?.position)) {
        console.log('darkMagic')

    } else if (elementIds.fines.includes(heroesState[CurrentHeroIndex(heroesState)]?.position)) {
        console.log('fines')

    } else if (elementIds.start === heroesState[CurrentHeroIndex(heroesState)]?.position) {
        console.log('start')
        ButtonRollDices(
            {heroesState, setHeroesState}, 
            {firstMainButton, setFirstMainButton}, 
            {secondMainButton, setSecondMainButton}, 
            {dices, setDices}, 
            {dbUpdatePositionFlag, setDbUpdatePositionFlag}
        )

    } else if (elementIds.prison === heroesState[CurrentHeroIndex(heroesState)]?.position) {
        console.log('prison')

    } else if (elementIds.portal === heroesState[CurrentHeroIndex(heroesState)]?.position) {
        console.log('portal')

    } else if (elementIds.welcomeToPrison === heroesState[CurrentHeroIndex(heroesState)]?.position) {
        console.log('welcomeToPrison')

    }
}