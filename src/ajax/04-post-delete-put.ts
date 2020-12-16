import { ajax } from 'rxjs/ajax'


const url = 'https://httpbin.org11/delay/1'

ajax({
    url,
    method: 'POST',
    headers: {
        'mi-token': 'ENASD2314'
    },
    body: {
        id: 5,
        name: 'Max'
    }
}).subscribe(console.log)