import { of } from "rxjs";
import { tap, take } from "rxjs/operators";

const numbers$ = of(1,2,3,4,5,6)

numbers$.pipe(
    // tap( t => console.log('tap:', t)),
    take(4)
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})

