import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next:', val),
    complete: () => console.log('completed!') 
}

const interval$ = interval(200)

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 2 )

console.log('Inicio')

// const sub1$ = interval$.subscribe( observer )

// const timer$ = timer(1000)
// const timer$ = timer(1000, 3000)
const timer$ = timer(hoyEn5)

const subs2$ = timer$.subscribe(observer)

console.log('Fin')
