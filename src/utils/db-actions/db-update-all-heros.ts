import { Player } from "@/types";
import { playersEndpoint } from "./db-endpoints";

export default function DbUpdateAllHeros(
    heroesState: Player[], 
) {
    
    heroesState.forEach(hero => {
        fetch(`${playersEndpoint}${hero.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(hero)
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
            console.log('Server response:', response)
            })
    })

    // fetch(`${playersEndpoint}${CurrentHero(heroesState).id}`, {
    //     method: 'PUT',
    //     headers: { 'Content-Type': 'application/json;charset=utf-8' },
    //     body: JSON.stringify(CurrentHero(heroesState))
    // })
    //     .then((rawResponse) => rawResponse.json())
    //     .then((response) => {
    //     console.log('Server response:', response)
    //     })
}