import { fromEvent } from "rxjs";

const src1$ = fromEvent<MouseEvent>( document, 'click')
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup')

const src3$ = fromEvent<MouseEvent>( document, 'mousemove')


const observer = {
    next: val => console.log('next', val)
}


src1$.subscribe( ({ x, y }) => {
    console.log('click', x, y)
})

src2$.subscribe( ({ key }) => {
    console.log('keyup',key)
})

src3$.subscribe( ({ x, y }) => {
    console.log(x, y)
})
