import { ajax } from "rxjs/ajax"
import { endWith, startWith } from "rxjs/operators"

const loadingDiv = document.createElement('div')
loadingDiv.classList.add('loading')
loadingDiv.innerHTML = 'Cargando...'

const body = document.querySelector('body')


//Stream
ajax.getJSON('https://reqres.in/api/users/2?delay=3')
.pipe(
    startWith(true),
    endWith(false)
)
.subscribe( resp => {

    if(resp) body.append(loadingDiv)
    else document.querySelector('.loading').remove()
    console.log(resp);
    
})








