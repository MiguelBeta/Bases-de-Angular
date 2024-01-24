

export function whatsMyTipe<T>( argument:T ): T {


    return argument;
}

let amIString = whatsMyTipe<string>('Hola mundo');
let amINumber = whatsMyTipe<number>(100);
let amIArray  = whatsMyTipe<number[]>([1,2,3,4,5,]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );

