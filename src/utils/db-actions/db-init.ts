import { owners, players } from "@/start-info"
import { ownersEndpoint, playersEndpoint } from "./db-endpoints"
import { Dispatch, SetStateAction } from "react"

export default function DbInit (initHeroes: string[], setDbInitFlag: Dispatch<SetStateAction<boolean>>) {

    let currentHeroes: any[] = initHeroes.map(hero => {
        return Object.values(players).find(({name}) =>  name === hero)
    })
    currentHeroes[0].isCurrentHero = true

    currentHeroes.forEach((hero, index) => {
        fetch(`${playersEndpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(hero)
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
            console.log('Server response:', response)
            })
            .finally(() => {
                if(index === currentHeroes.length - 1) {
                    owners.forEach((owner, i) => {
                        fetch(`${ownersEndpoint}`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json;charset=utf-8' },
                            body: JSON.stringify(owner)
                        })
                            .then((rawResponse) => rawResponse.json())
                            .then((response) => {
                            console.log('Server response:', response)
                            })
                            .finally(() => {
                                if(i === owners.length - 1) {
                                    setDbInitFlag(true)
                                }
                            })
                    })
                }
            })
    })
}