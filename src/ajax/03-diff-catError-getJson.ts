import { of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


const url = 'https://httpbin.org11/delay/1'

const errorControl = (res: AjaxError) => {
    console.warn('error', res.message)
    return of({
        ok: false,
        usuarios: []
    })
}

const obs$ = ajax.getJSON(url)
const obs2$ = ajax(url)

// obs2$.pipe(
//     catchError(errorControl)
// )
// .subscribe( data => console.log('ajax', data) )

obs$.pipe(
    catchError(errorControl)
)
.subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error en subs:', err),
    complete: () => console.log('complete')
})



