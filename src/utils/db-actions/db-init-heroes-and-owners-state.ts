import { Player } from "@/types";
import { ownersEndpoint, playersEndpoint } from "./db-endpoints";
import { Dispatch, SetStateAction } from "react";

export default function DbInitHeroesAndOwnersState(
    setHeroesState: Dispatch<SetStateAction<Player[]>>, 
    setOwnersState: Dispatch<SetStateAction<any[]>>, 
    setDbUpdatePositionFlag: Dispatch<SetStateAction<boolean>>
) {

    fetch(`${playersEndpoint}`)
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            setHeroesState(response)
        })
        .finally(() => 
            fetch(`${ownersEndpoint}`)
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
                setOwnersState(response)
            })
            .finally(() => setDbUpdatePositionFlag(true))
        )
}