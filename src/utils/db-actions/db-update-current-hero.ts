import { Player } from "@/types";
import { CurrentHero } from "../components/current-hero";
import { playersEndpoint } from "./db-endpoints";
import { Dispatch, SetStateAction } from "react";


export default function DbUpdateCurrentHero(heroesState: Player[], flag: boolean, setFlag: Dispatch<SetStateAction<boolean>>) {
    fetch(`${playersEndpoint}${CurrentHero(heroesState).id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
        body: JSON.stringify(CurrentHero(heroesState))
    })
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
        console.log('Server response:', response)
        })
        .finally(() => setFlag(!flag))
}