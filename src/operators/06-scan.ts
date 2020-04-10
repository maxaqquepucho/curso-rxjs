import { interval, from } from "rxjs";
import { reduce, take, tap, scan, map } from 'rxjs/operators'

const numbers = [1,2,3,4,5,6]

const totalAccu = (accu, curr) => accu + curr

// Reduce
from(numbers).pipe(
    reduce(totalAccu, 0)
)
.subscribe(console.log)

// scan
from(numbers).pipe(
    scan(totalAccu, 0)
)
.subscribe(console.log)

// Redux

interface Usuario {
    id?: string
    isAuth?: boolean
    token?: string
    edad?: number
}

const user: Usuario[] = [
    { id: 'max', isAuth: false, token: null },
    { id: 'max', isAuth: true, token: 'ABC' },
    { id: 'max', isAuth: true, token: 'ABC1321' },
]

const state$ = from(user).pipe(
    scan<Usuario>((accu, curr) => {
        return { ...accu, ...curr }
    }, { edad: 22 })
)

const id$ = state$.pipe(
    map(state => state)
)

id$.subscribe(console.log)