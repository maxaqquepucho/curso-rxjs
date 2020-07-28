import { interval, fromEvent } from "rxjs"
import { takeUntil, skip, tap } from "rxjs/operators"

const button = document.createElement('button')
button.innerHTML = 'Botóm Aparece'

document.querySelector('body').append(button)


const counter$ = interval(1000)
// const clickBtn$ = fromEvent(button, 'click')

const clickBtn$ = fromEvent(button, 'click').pipe(
    tap( () => console.log('tab antes del click') ),
    skip(1),
    tap( () => console.log('tab después del click') ),
)


counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('completed')
})