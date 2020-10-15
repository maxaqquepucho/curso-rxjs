import { fromEvent, asyncScheduler, pipe } from "rxjs";
import { throttleTime, tap, map, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, 'click')

click$
.pipe(
    throttleTime(3000)
)
// .subscribe(console.log)

const input = document.createElement('input')

document.body.append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$
.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true,
        trailing: true
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)