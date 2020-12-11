import  { ajax } from 'rxjs/ajax'

const url = 'https://httpbin.org/delay/1'

const obs$ = ajax.getJSON(url, {
    'Content-type': 'application/json',
    'mi-token': 'ABC345'
})

obs$.subscribe( data => console.log('data:', data) )

