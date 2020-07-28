import { fromEvent, pipe } from "rxjs";
import { debounceTime, tap, map, pluck, distinctUntilChanged } from "rxjs/operators";

const click$ = fromEvent(document, 'click')

click$
.pipe(
    debounceTime(3000)
)
.subscribe(console.log)

const input = document.createElement('input')

document.body.append(input)

const input$ = fromEvent<KeyboardEvent>(input, 'keyup')

input$
.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log)