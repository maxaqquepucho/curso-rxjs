import { from } from "rxjs";
import { distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";


interface Personaje {
    nombre: String;
    item: {
        text: String;
    };
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman',
        item: {
            text: 'texto 1'
        }
    },
    {
        nombre: 'Aquaman',
        item: {
            text: 'texto 1'
        }
    },
    {
        nombre: 'Megaman',
        item: {
            text: 'texto 2'
        }
    },
    {
        nombre: 'Sonic',
        item: {
            text: 'texto 3'
        }
    },
    {
        nombre: 'Sonic',
        item: {
            text: 'texto 4'
        }
    },
    {
        nombre: 'spiderMan',
        item: {
            text: 'texto 4'
        }
    },
    {
        nombre: 'Megaman',
        item: {
            text: 'texto 5'
        }
    },
    {
        nombre: 'Arrow',
        item: {
            text: 'texto 5'
        }
    },
    {
        nombre: 'Arrow',
        item: {
            text: 'texto 1'
        }
    },
    {
        nombre: 'Arrow',
        item: {
            text: 'texto 6'
        }
    },
    {
        nombre: 'Megaman',
        item: {
            text: 'texto 1'
        }
    },
]

from(personajes)
.pipe(
    distinctUntilKeyChanged('nombre')
)
.subscribe(console.log)