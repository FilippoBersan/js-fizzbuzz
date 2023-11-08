'use strict';

// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let contatoreInizio = 0;
let contatoreFine = 100;

for (let i = contatoreInizio; i <= contatoreFine; i++) {
  // multipli di 3/
  if (i % 3 === 0) {
    console.log('Fizz');
  }
  // multipli di 5/
  else if (i % 5 === 0) {
    console.log('Buzz');
  }
  // numeri 0 100/
  else if (i % 1 === 0) {
    console.log('', i);
  }
  // multipli sia di 3 che di 5/
  // else  ((i % 3, 5 === 0)) {
  //   console.log('FizzBuzz', i);
  // }
}
