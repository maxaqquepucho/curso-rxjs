
import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completed!')
}

const intervalo$ = new Observable<number>( subs => {
    
    const intervalID = setInterval(
        () => {
            subs.next( Math.random() )
            console.log('log emit')
        } , 1000
       
    )

    return () => {
        clearInterval( intervalID )
        console.log('interval distroyed')
    }
})

/**
 * 1. Casteo Multiple
 * 2. También es un observer
 * 3. next, error, complete
 */

const subject$ = new Subject();
const intervalSubs = intervalo$.subscribe( subject$ )



const subs1 = subject$.subscribe( observer)
const subs2 = subject$.subscribe( observer)


setTimeout(() => {
    subject$.next(500)

    subject$.complete()

    intervalSubs.unsubscribe()
}, 4000);







