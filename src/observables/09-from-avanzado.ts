import { of, Observer, from } from "rxjs";


const observer = {
    next: (val) => console.log('next:', val),
    complete: () => console.log('complete')
}


const miGenerador = function*() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
    yield 6
}

const miIterable = miGenerador()

// for (const iterator of miIterable) {
//     console.log(iterator)
// }

from( miIterable ).subscribe( observer )

// const source$ = from([1,2,3,4,5,6,7])
// const source$ = of(...[1,2,3,4,5,6,7])

// const source$ = from('Max Aqq 1234567')

// const source$ = from( fetch('https://api.github.com/users/octocat/orgs') )

// source$.subscribe( async (res) => {
//     console.log(res)

//     const data = await res.json()
//     console.log(data)
// })