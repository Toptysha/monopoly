import { Dispatch, SetStateAction } from "react"
import { ownersEndpoint, playersEndpoint } from "./db-endpoints"

export default function DbClear (setDbClearFlag: Dispatch<SetStateAction<boolean>>) {

    fetch(`${playersEndpoint}`)
        .then((rawResponse) => rawResponse.json())
        .then((response) => {
            if (response.length > 0) {
                // console.log('Server response:', response)
                response.forEach((hero: any) => {
                    fetch(`${playersEndpoint}${hero.id}`, {method: 'DELETE'})
                    // .then((response) => {
                    // console.log('Server response:', response)
                    // })
                })
            }
        })
        .finally( () => 
            fetch(`${ownersEndpoint}`)
                .then((rawResponse) => rawResponse.json())
                .then((response) => {
                    if (response.length > 0) {
                        // console.log('Server response:', response)
                        response.forEach((elem: any) => {
                            fetch(`${ownersEndpoint}${elem.id}`, {method: 'DELETE'})
                            // .then((response) => {
                            // console.log('Server response:', response)
                            // })
                        })
                    }
                })
                .finally(() => setDbClearFlag(true))
        )   
}