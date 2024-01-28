import { ownersEndpoint } from "./db-endpoints";

export default function DbUpdateOwners(
    ownersState: any[], 
) {
    console.log(ownersState)
    ownersState.forEach(street => {
        fetch(`${ownersEndpoint}${street.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json;charset=utf-8' },
            body: JSON.stringify(street)
        })
            .then((rawResponse) => rawResponse.json())
            .then((response) => {
            console.log('Server response:', response)
            })
    })
}