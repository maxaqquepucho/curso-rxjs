import { range, from } from "rxjs";
import {  filter } from 'rxjs/operators'

// range(40,10).pipe(
//     filter( val => val % 2 === 1  )
// ).subscribe( console.log )

interface Personaje {
    tipo: string;
    nombre: string;
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
]

const sub1$ = from(personajes)
                .pipe(
                    filter( p => p.tipo !== 'heroe' )
                )



sub1$.subscribe( val => console.log(val) )
