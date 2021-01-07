import { fromEvent, interval } from "rxjs";
import { mergeMap, takeUntil } from "rxjs/operators";



const mouseDown$ = fromEvent(document, 'mousedown')
const mouseUp$ = fromEvent(document, 'mouseup')
const interval$ = interval()


mouseDown$
.pipe(
    mergeMap(() => interval$.pipe( takeUntil( mouseUp$ ) )  )
)
.subscribe(console.log)


