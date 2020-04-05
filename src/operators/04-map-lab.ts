import { range, from, fromEvent } from "rxjs";
import {  filter, map, tap } from 'rxjs/operators'

const paragraphs = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar fringilla mi, vel interdum felis sagittis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut lacinia posuere enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi iaculis mauris vel mi feugiat rutrum. Sed sapien lectus, mattis eget arcu tempor, rhoncus posuere leo. Duis ligula nibh, auctor non felis a, vehicula pharetra enim. Duis auctor pharetra imperdiet. Curabitur vehicula, orci a sagittis porta, massa augue semper dolor, et luctus sem purus sed leo. Proin vestibulum non nunc ut volutpat. Vestibulum gravida dui nec lacus molestie, eu tempor nibh fringilla. Etiam accumsan rutrum ligula, eu sodales odio pellentesque at. Vivamus iaculis tellus in arcu posuere malesuada.
<br/><br/>
Nulla at nisi ante. Nunc accumsan tincidunt facilisis. Maecenas tristique pulvinar mauris sit amet tincidunt. Nulla velit turpis, eleifend eu justo a, pellentesque ullamcorper justo. Vivamus auctor nisl convallis, egestas dolor vel, tempus libero. Nunc cursus ornare libero, et sagittis turpis pulvinar gravida. Aliquam metus nulla, commodo vitae tempus ut, laoreet id magna.
<br/><br/>
Nulla malesuada vestibulum erat, quis sollicitudin ante feugiat in. Quisque sagittis odio dui, sed venenatis metus gravida nec. In odio arcu, ornare vitae tincidunt ac, congue volutpat purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam ut gravida ipsum. Vestibulum at maximus nisl. Nullam blandit urna vel est luctus tempor.
<br/><br/>
Pellentesque sollicitudin imperdiet purus, a mattis neque. Sed iaculis augue nec ante dictum iaculis. Fusce sodales sem ornare, tincidunt dolor eget, lobortis lectus. Praesent vel magna felis. Praesent aliquam, metus ac ullamcorper viverra, nisi lacus consequat sem, a hendrerit lectus nulla at sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus porta ante vitae turpis aliquet, in aliquam dui suscipit. Donec ultricies nunc et neque congue porta. Maecenas viverra justo ut dui faucibus, ac aliquam est hendrerit. Integer in feugiat felis, et pretium urna. Duis in convallis lectus, at volutpat nulla. Mauris a volutpat erat.
<br/><br/>
Mauris quis quam ut sem lacinia pretium sed nec enim. Proin ac mollis neque. Maecenas malesuada justo vulputate nunc rutrum, suscipit volutpat eros ullamcorper. Phasellus urna nibh, suscipit gravida nulla non, suscipit viverra metus. Etiam non egestas orci. Nullam ac euismod augue. Aliquam blandit tempor neque. Aliquam vel orci interdum, commodo augue vel, varius lectus. Vestibulum vitae congue felis, non condimentum mi. Nam ultrices lacinia risus, scelerisque dapibus erat pulvinar sit amet. Etiam ac volutpat nibh.`

const texto = document.createElement('div')
texto.innerHTML = paragraphs

const body = document.querySelector('body')
body.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')
body.append(progressBar)

//Streams

const scroll$ = fromEvent(document, 'scroll')

// calculate
const calculatePercent = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement

    return (scrollTop/ (scrollHeight - clientHeight)) * 100
}

const progress$ = scroll$.pipe(
    // map(val => calculatePercent(val))
    map(calculatePercent),
    tap(console.log)
)

progress$.subscribe( percent => {
    // console.log(percent)
    progressBar.style.width = `${ percent }%`
})
