
import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completed!')
}

const intervalo$ = new Observable<number>( subs => {

    let contador: number = 0
    
    const interval = setInterval( () => {
        subs.next(contador++)
        console.log(contador)
    }, 1000)
    
    setTimeout(() => {
        subs.complete()
    }, 3000);

    return () => {
        clearInterval(interval)
        console.log('interval distroyed')
    } 


    
    // subs.complete()
    // subs.next('cuarto')

})


const sub1 = intervalo$.subscribe( observer )
const sub2 = intervalo$.subscribe( observer )
const sub3 = intervalo$.subscribe( observer )

sub1.add(sub2).add(sub3)

setTimeout( () => {
    sub1.unsubscribe() 
    
    console.log('completado unsuscribe')
}, 4000)

