import { fromEvent, of } from "rxjs"
import { ajax } from "rxjs/ajax"
import { catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap } from "rxjs/operators"

//helper
const loginService = userPass =>
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'),
        catchError( err => of(null) )
    )

const form = document.createElement('form')
const inputEmail = document.createElement('input')
const inputPass = document.createElement('input')
const submitBtn = document.createElement('button')


inputEmail.type = 'email'
inputEmail.placeholder = 'Email'
inputEmail.value = 'eve.holt@reqres.in'

inputPass.type = 'password'
inputPass.placeholder = 'Password'
inputPass.value = 'cityslicka'

submitBtn.innerHTML = 'Ingresar'

form.append(inputEmail, inputPass, submitBtn)
document.querySelector('body').append(form)

// Streams
const submitForm$ = fromEvent<Event>(form, 'submit')
    .pipe(
        tap(event => event.preventDefault()),
        map(event => ({
            email: event.target[0].value,
            password: event.target[1].value,
        })),
        mergeMap(loginService),
        // switchMap(loginService),
        // exhaustMap(loginService),
    )

submitForm$.subscribe( console.log )

