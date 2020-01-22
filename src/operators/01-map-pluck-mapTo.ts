import { range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from 'rxjs/operators'

// range(1,5).pipe(
//     map<number, string>( val => ( val * 3 ).toString() )
// ).subscribe( console.log )


const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyUp$.pipe(
    map( event => event.code )
)

const keyupMapTo$ = keyUp$.pipe(
    mapTo('tecla presionada')
)

const keyupPluck$ = keyUp$.pipe(
    pluck('target', 'baseURI')
)

keyupCode$.subscribe( code => console.log('map', code) )

keyupPluck$.subscribe( res => console.log('pluck', res) )

keyupMapTo$.subscribe( res => console.log( 'mapTo' ,res) )