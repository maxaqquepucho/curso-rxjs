import { interval } from "rxjs";
import { reduce, take, tap } from 'rxjs/operators'

const numbers = [1,2,3,4,5,6]

const totalReducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue
}

const total = numbers.reduce(totalReducer, 0)
console.log('total arr', total)

interval(1000).pipe(
    take(4),
    tap(console.log),
    reduce(totalReducer)

).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
})