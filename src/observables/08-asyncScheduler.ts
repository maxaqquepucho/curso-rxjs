import { asyncScheduler } from "rxjs";

// setTimeout(() => { }, 2000);
// setInterval(() => { }, 2000);

// const saludar = () => console.log('hello pe')
const saludar2 = (word) => console.log('hello pe: ', word)

// asyncScheduler.schedule( saludar2, 2000, 'Hubca' )


const subs1$ = asyncScheduler.schedule( function (state) {
    console.log('state', state)
   
    this.schedule( state + 1 , 500 )
},2500, 0)


asyncScheduler.schedule( () => subs1$.unsubscribe() , 5000 )