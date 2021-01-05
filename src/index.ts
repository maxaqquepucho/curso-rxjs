import { fromEvent } from "rxjs"
import { ajax } from "rxjs/ajax"
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators"


const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    map(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${ text }`
    )),
    mergeAll(),
    pluck('items')
)
.subscribe( resp => {
    console.log(resp);
    
})
