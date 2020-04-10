import { fromEvent } from "rxjs";
import { map, first, tap } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>(document, 'click')

click$.pipe(
    tap<MouseEvent>(console.log),
    map( ({clientX, clientY}) => ({ clientX, clientY }) ),
    first( ({clientY}) => clientY >= 150 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complite')
})

