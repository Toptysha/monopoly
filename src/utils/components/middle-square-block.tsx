import { MainButton, Player } from "@/types";
import CreateDices from "./create-dices";
import TopToDos from "./top-to-dos";
import { Dispatch, SetStateAction } from "react";

export default function MiddleSquareBlock({
    heroesState, setHeroesState, firstMainButton, setFirstMainButton, secondMainButton, setSecondMainButton, dices, setDices}: {
        heroesState: Player[],
        setHeroesState: Dispatch<SetStateAction<Player[]>>,
        firstMainButton: MainButton, 
        setFirstMainButton: Dispatch<SetStateAction<MainButton>>,
        secondMainButton: MainButton, 
        setSecondMainButton: Dispatch<SetStateAction<MainButton>>,
        dices: number[], 
        setDices: Dispatch<SetStateAction<number[]>>
    }
) {

    return (
        <>
            <TopToDos
                heroesState={heroesState}
                firstMainButton={firstMainButton} 
                setFirstMainButton={setFirstMainButton} 
                secondMainButton={secondMainButton}
                setSecondMainButton={setSecondMainButton}
            />
            <CreateDices dices={dices}/>
        </>
    )
}