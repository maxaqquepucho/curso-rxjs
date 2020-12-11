import { map, pluck, catchError } from 'rxjs/operators';
import { ajax, AjaxError } from 'rxjs/ajax'
import { of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5'

const catchGetError = (error: AjaxError) => {
    console.warn('error en:', error.message)
    return of([])
}


ajax(url).pipe(
    pluck('response'),
    catchError( catchGetError )
)
.subscribe( users => console.log('usuarios:', users) )
