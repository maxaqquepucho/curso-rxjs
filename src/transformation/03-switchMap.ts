
import { fromEvent, Observable } from "rxjs"
import { ajax } from "rxjs/ajax"
import { debounceTime, map, mergeAll, mergeMap, pluck, switchMap } from "rxjs/operators"
import { GithubUser } from "../interfaces/github-user.interface"
import { GithubUsersResp } from "../interfaces/github-users.interface"


const body = document.querySelector('body')
const textInput = document.createElement('input')
const orderList = document.createElement('ol')

body.append(textInput, orderList)

const showUsers = (users: GithubUser[]) => {
    orderList.innerHTML = ''

    for (const user of users) {
        const li = document.createElement('li')
        const img = document.createElement('img')
        img.src = user.avatar_url

        const anchor = document.createElement('a')
        anchor.href = user.html_url
        anchor.text = 'Ver página'
        anchor.target = '_blank'


        li.append(img)
        li.append(user.login + ' ')
        li.append(anchor)

        orderList.append(li)

    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, String>('target', 'value'),
    map<String, Observable<GithubUsersResp>>(text => ajax.getJSON(
        `https://api.github.com/search/users?q=${ text }`
    )),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp, GithubUser[]>('items')
)
// .subscribe( showUsers )

const url = 'https://httpbin.org/delay/1?arg='

input$
.pipe(
    pluck('target', 'value'),
    switchMap( text => ajax.getJSON(url + text))
)
.subscribe(console.log)


