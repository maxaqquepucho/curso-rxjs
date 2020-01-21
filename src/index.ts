import { range, fromEvent } from "rxjs";
import { map } from 'rxjs/operators'

// range(1,5).pipe(
//     map<number, string>( val => ( val * 3 ).toString() )
// ).subscribe( console.log )


const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupCode$ = keyUp$.pipe(
    map( event => event.code )
)

keyupCode$.subscribe( code => console.log('map', code) )