import DbClear from "../db-actions/db-clear"
import DbInit from "../db-actions/db-init"
// import InitLocalStorageInfo from "../local-storage/init-localStorage-info"

// export default function StartNewGame (selectedHeroes: any)  {
//     if (selectedHeroes.current.length < 2) {
//         alert('Игроков должно быть не меньше 2-ух и не больше 4-ех!')
//     } else {
//         // localStorage.clear()
//         // InitLocalStorageInfo(selectedHeroes.current)
//         DbClear()
//         DbInit(selectedHeroes.current)
//         location.href = 'http://localhost:2090/game'
//     }   
// }