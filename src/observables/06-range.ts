import { of, range, asyncScheduler } from "rxjs";

// const src$ = range(1,2,3,4,5)

const src$ = range(1,1000, asyncScheduler)

console.log('inicio')
src$.subscribe( console.log )
console.log('fin')
