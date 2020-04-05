import { range, from, fromEvent } from "rxjs";
import {  filter, map, tap } from 'rxjs/operators'

const numbers$ = range(1,5)

numbers$.pipe(
    tap( x => console.log('antes', x)),
    map( val => val *10),
    tap({
        next: val => console.log('después', val),
        complete: () => console.log('finish')
    })
).subscribe()   