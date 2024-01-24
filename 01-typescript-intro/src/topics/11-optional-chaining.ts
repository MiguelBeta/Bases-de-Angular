// import { Passenger } from './11-optional-chaining';



export interface Passenger {
    name: string;
    children?: string[];
}

const passanger1: Passenger = {
    name: 'Miguel',
}

const passanger2: Passenger = {
    name: 'Jorge B',
    children: [ 'Andrea', 'Miguel' ],
}

const printChildren = ( passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name, howManyChildren);
}

printChildren( passanger2 );
printChildren( passanger1 );
