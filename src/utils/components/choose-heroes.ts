import { MutableRefObject } from "react"
import { heroes } from "@/start-info"

export default function ChooseHeroes(
    event: any, 
    goodWizardCount: MutableRefObject<Partial<number>>, 
    evilWizardCount: MutableRefObject<Partial<number>>, 
    selectedHeroes: MutableRefObject<Partial<string[]>>
    ) {

    const countGapHeroes = () => Math.abs(goodWizardCount.current - evilWizardCount.current)
    const countHeroes = () => goodWizardCount.current + evilWizardCount.current

    const target = event.target

    if (Object.values(heroes.goodWizard).find((i) => i === target.textContent)) {
        if (target.classList.contains('selectedHeroButton')) { 
            if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                goodWizardCount.current --
                if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                    // del 
                    selectedHeroes.current.splice(selectedHeroes.current.indexOf(target.textContent), 1)
                    //
                    target.classList.toggle('selectedHeroButton')
                } else {
                    goodWizardCount.current ++
                    target.classList.toggle('redHeroButton')
                    setTimeout(() => target.classList.toggle('redHeroButton'), 500)
                }
            } else {
                target.classList.toggle('redHeroButton')
                setTimeout(() => target.classList.toggle('redHeroButton'), 500)
            }
        } else {
            if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                goodWizardCount.current ++
                if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                    // add
                    selectedHeroes.current.push(target.textContent)
                    //
                    target.classList.toggle('selectedHeroButton')
                } else {
                    goodWizardCount.current --
                    target.classList.toggle('redHeroButton')
                    setTimeout(() => target.classList.toggle('redHeroButton'), 500)
                }
            } else {
                target.classList.toggle('redHeroButton')
                setTimeout(() => target.classList.toggle('redHeroButton'), 500)
            }
        }      
    } else if (Object.values(heroes.evilWizard).find((i) => i === target.textContent)) {
        if (target.classList.contains('selectedHeroButton')) { 
            if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                evilWizardCount.current --
                if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                    // del
                    selectedHeroes.current.splice(selectedHeroes.current.indexOf(target.textContent), 1)
                    //
                    target.classList.toggle('selectedHeroButton')
                } else {
                    evilWizardCount.current ++
                    target.classList.toggle('redHeroButton')
                    setTimeout(() => target.classList.toggle('redHeroButton'), 500)
                }
            } else {
                target.classList.toggle('redHeroButton')
                setTimeout(() => target.classList.toggle('redHeroButton'), 500)
            }
        } else {
            if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                evilWizardCount.current ++
                if ((countGapHeroes() < 2) && (countHeroes() < 5)) {
                    // add
                    selectedHeroes.current.push(target.textContent)
                    //
                    target.classList.toggle('selectedHeroButton')
                } else {
                    evilWizardCount.current --
                    target.classList.toggle('redHeroButton')
                    setTimeout(() => target.classList.toggle('redHeroButton'), 500)
                }
            } else {
                target.classList.toggle('redHeroButton')
                setTimeout(() => target.classList.toggle('redHeroButton'), 500)
            }
        }
    }

    return selectedHeroes
}