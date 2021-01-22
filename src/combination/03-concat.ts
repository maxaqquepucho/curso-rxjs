import { concat, interval, of } from "rxjs";
import { take } from "rxjs/operators";


const interval$ = interval(1000)

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(7)
)
.subscribe(console.log)










