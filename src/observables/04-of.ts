import { of } from "rxjs";

// const obs$ = of(1,2,3,5,6,7,8,9)


const obs$ = of(...[1,2,3,4,5,6,7],8,9, 10)

console.log('Inicio del Obs$')
obs$.subscribe(
    next => console.log('next', next),
    null,
    () => console.log('terminamos la secuencia')
)

console.log('Fin del Obs$')