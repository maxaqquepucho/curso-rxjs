
import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [next]:', error),
    complete: () => console.info('completed!')
}

const obs$ = new Observable( subs => {

    subs.next('primero')
    subs.next('segundo')

    subs.next('tercero')
    subs.complete()

    subs.next('cuarto')

})


obs$.subscribe( observer )








