import { of, pipe, from } from "rxjs";
import { distinct } from "rxjs/operators";


const numbers$ = of(1,1,1,3,3,2,2,2,4,4,5,3,1)

numbers$
.pipe(
    distinct()
)
.subscribe({
    next: val => console.log('next', val),
    complete: () => console.log('completed')
})

interface Personaje {
    nombre: String;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Aquaman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Sonic'
    },
    {
        nombre: 'spiderMan'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Arrow'
    },
    {
        nombre: 'Megaman'
    },
]

from(personajes)
.pipe(
    distinct(p => p.nombre)
)
.subscribe(console.log)