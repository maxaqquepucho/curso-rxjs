import { forkJoin, interval, of } from "rxjs";
import { delay, take } from "rxjs/operators";


const numbers$ = of(1, 2, 3, 4)
const interval$ = interval(1000).pipe(take(3))
const letters$ = of('a', 'b').pipe(delay(3500))

forkJoin(
    {
        numbers$,
        interval$,
        letters$
    }
).subscribe(console.log)







